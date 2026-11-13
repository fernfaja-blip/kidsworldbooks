export interface SheetSubmissionPayload {
  sheetName: 'Contact Us' | 'Get Guides';
  formType: 'Contact Us (/contact-us)' | 'Get Guides (/)';
  fullName: string;
  email: string;
  organization: string;
  topic: string;
  message: string;
  honeypot?: string;
}

export interface SubmissionResult {
  ok: boolean;
  error?: string;
}

export const MAX_MESSAGE_LENGTH = 500;
export const MAX_SUBMISSIONS_PER_DAY = 3;
export const COOLDOWN_MS = 2 * 60 * 60 * 1000; // 2 hours in ms
export const DAY_WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours in ms

const RATE_LIMIT_STORAGE_KEY = 'kwb_form_submissions_log_v1';

// URL Web App de Apps Script generada en el Google Sheet:
// https://docs.google.com/spreadsheets/d/1ox86V5b2NBnI_wX2mdPKYdeL1g0KY-BAB5PcT-dDsV8/edit
export const GOOGLE_SHEETS_WEBHOOK_URL =
  ((import.meta as unknown as { env?: Record<string, string> }).env?.VITE_GOOGLE_SHEETS_WEBHOOK_URL) ||
  'https://script.google.com/macros/s/AKfycbyxKi0pgZQzT2q75UloJixKnqhLxIZP1Vbu_3wXigqbRoroKkW5_EpkKtYl3J-9zI32tg/exec';

// Detect HTML tags, JS events, script blocks, or code injection patterns
const CODE_INJECTION_REGEX =
  /<[a-z!/][\s\S]*?>|javascript:|vbscript:|data:text\/html|on(?:load|error|click|mouseover|focus|submit)\s*=|\b(?:function\s*\(|eval\s*\(|document\.cookie|window\.location|SELECT\s+.*\s+FROM|UNION\s+SELECT|DROP\s+TABLE|INSERT\s+INTO)\b/i;

export function containsCodeOrHtml(input: string): boolean {
  return CODE_INJECTION_REGEX.test(input);
}

// Sanitize plain text and prevent Google Sheets Formula Injection (=, +, -, @ at start)
export function sanitizePlainText(input: string, maxLen: number): string {
  let clean = (input || '')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, maxLen);

  // Neutralize spreadsheet formula triggers (=, +, -, @) except simple "-" placeholder
  if (clean.length > 1 && /^[=+\-@]/.test(clean)) {
    clean = `'${clean}`;
  }
  return clean;
}

interface SubmissionLogEntry {
  email: string;
  timestamp: number;
}

function checkRateLimitForEmail(email: string): { allowed: boolean; reason?: string } {
  try {
    const normalizedEmail = email.trim().toLowerCase();
    const now = Date.now();
    const raw = localStorage.getItem(RATE_LIMIT_STORAGE_KEY);
    const allLogs: SubmissionLogEntry[] = raw ? JSON.parse(raw) : [];

    // Keep only logs from the last 24 hours
    const recentLogs = allLogs.filter((entry) => now - entry.timestamp < DAY_WINDOW_MS);
    const emailLogs = recentLogs.filter((entry) => entry.email === normalizedEmail);

    // Rule A: Max 3 messages per email in a 24-hour day
    if (emailLogs.length >= MAX_SUBMISSIONS_PER_DAY) {
      return {
        allowed: false,
        reason:
          'Security limit reached: A maximum of 3 messages per email address is allowed per day. Please try again tomorrow.',
      };
    }

    // Rule B: 2-hour cooldown between submissions from the same email address
    if (emailLogs.length > 0) {
      const lastSubmission = Math.max(...emailLogs.map((e) => e.timestamp));
      const elapsed = now - lastSubmission;
      if (elapsed < COOLDOWN_MS) {
        const remainingMinutes = Math.ceil((COOLDOWN_MS - elapsed) / (60 * 1000));
        const hours = Math.floor(remainingMinutes / 60);
        const mins = remainingMinutes % 60;
        const timeStr = hours > 0 ? `${hours}h ${mins}m` : `${mins} minutes`;
        return {
          allowed: false,
          reason: `Please wait ${timeStr} before sending another request with this email address (limit: 1 message every 2 hours, max 3 per day).`,
        };
      }
    }

    return { allowed: true };
  } catch {
    return { allowed: true };
  }
}

function recordSubmissionForEmail(email: string): void {
  try {
    const normalizedEmail = email.trim().toLowerCase();
    const now = Date.now();
    const raw = localStorage.getItem(RATE_LIMIT_STORAGE_KEY);
    const allLogs: SubmissionLogEntry[] = raw ? JSON.parse(raw) : [];
    const recentLogs = allLogs.filter((entry) => now - entry.timestamp < DAY_WINDOW_MS);
    recentLogs.push({ email: normalizedEmail, timestamp: now });
    localStorage.setItem(RATE_LIMIT_STORAGE_KEY, JSON.stringify(recentLogs));
  } catch {
    // Ignore storage errors in private browsing
  }
}

export async function submitToGoogleSheet(
  payload: SheetSubmissionPayload
): Promise<SubmissionResult> {
  // 0. Honeypot check (bots fill hidden fields)
  if (payload.honeypot && payload.honeypot.trim().length > 0) {
    return { ok: true };
  }

  // 1. Validate character limit (max 500 chars on message)
  if ((payload.message || '').length > MAX_MESSAGE_LENGTH) {
    return {
      ok: false,
      error: `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters.`,
    };
  }

  // 2. Validate plain text only (no HTML, scripts, or code)
  const fieldsToCheck = [
    payload.fullName,
    payload.email,
    payload.organization,
    payload.topic,
    payload.message,
  ];
  if (fieldsToCheck.some((field) => containsCodeOrHtml(field || ''))) {
    return {
      ok: false,
      error:
        'Only plain text is allowed. HTML tags (< >), scripts, or code snippets are not permitted.',
    };
  }

  // 3. Validate email rate limit (Max 3 messages/day, 2-hour interval)
  const rateCheck = checkRateLimitForEmail(payload.email);
  if (!rateCheck.allowed) {
    return {
      ok: false,
      error: rateCheck.reason,
    };
  }

  // 4. Sanitize all fields to strict plain text (and block spreadsheet formula injection)
  const timestamp = new Date().toISOString();
  const cleanPayload = {
    timestamp,
    sheetName: payload.sheetName,
    formType: payload.formType,
    fullName: sanitizePlainText(payload.fullName, 100),
    email: sanitizePlainText(payload.email, 120),
    organization: sanitizePlainText(payload.organization, 120),
    topic: sanitizePlainText(payload.topic, 120),
    message: sanitizePlainText(payload.message, MAX_MESSAGE_LENGTH),
  };

  const formParams = new URLSearchParams();
  formParams.append('timestamp', cleanPayload.timestamp);
  formParams.append('sheetName', cleanPayload.sheetName);
  formParams.append('formType', cleanPayload.formType);
  formParams.append('fullName', cleanPayload.fullName);
  formParams.append('email', cleanPayload.email);
  formParams.append('organization', cleanPayload.organization);
  formParams.append('topic', cleanPayload.topic);
  formParams.append('message', cleanPayload.message);

  // 5. Send to Google Sheets Web App
  if (GOOGLE_SHEETS_WEBHOOK_URL) {
    try {
      await fetch(`${GOOGLE_SHEETS_WEBHOOK_URL}?${formParams.toString()}`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(cleanPayload),
      });
    } catch (err) {
      console.error('Error sending to Google Sheet:', err);
    }
  }

  // 6. Backup in Netlify Forms
  try {
    const netlifyData = new URLSearchParams(formParams);
    netlifyData.append('form-name', 'kidsworldbooks-leads');

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: netlifyData.toString(),
    });
  } catch {
    // Ignore local dev fallback error
  }

  recordSubmissionForEmail(cleanPayload.email);
  return { ok: true };
}
