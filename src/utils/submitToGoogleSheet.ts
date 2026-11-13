export interface SheetSubmissionPayload {
  sheetName: 'Contact Us' | 'Get Guides';
  formType: 'Contact Us (/contact-us)' | 'Get Guides (/)';
  fullName: string;
  email: string;
  organization: string;
  topic: string;
  message: string;
}

// URL Web App de Apps Script generada en el Google Sheet:
// https://docs.google.com/spreadsheets/d/1ox86V5b2NBnI_wX2mdPKYdeL1g0KY-BAB5PcT-dDsV8/edit
export const GOOGLE_SHEETS_WEBHOOK_URL =
  ((import.meta as unknown as { env?: Record<string, string> }).env?.VITE_GOOGLE_SHEETS_WEBHOOK_URL) ||
  'https://script.google.com/macros/s/AKfycbyxKi0pgZQzT2q75UloJixKnqhLxIZP1Vbu_3wXigqbRoroKkW5_EpkKtYl3J-9zI32tg/exec';

export async function submitToGoogleSheet(payload: SheetSubmissionPayload): Promise<void> {
  const timestamp = new Date().toISOString();
  const data = {
    timestamp,
    ...payload,
  };

  const formParams = new URLSearchParams();
  formParams.append('timestamp', timestamp);
  formParams.append('sheetName', payload.sheetName);
  formParams.append('formType', payload.formType);
  formParams.append('fullName', payload.fullName);
  formParams.append('email', payload.email);
  formParams.append('organization', payload.organization);
  formParams.append('topic', payload.topic);
  formParams.append('message', payload.message);

  // 1. Envía la fila a la pestaña correspondiente (Contact Us o Get Guides) en Google Drive
  // Enviamos JSON en el body (para JSON.parse(e.postData.contents)) y query params en la URL (para e.parameter)
  if (GOOGLE_SHEETS_WEBHOOK_URL) {
    try {
      await fetch(`${GOOGLE_SHEETS_WEBHOOK_URL}?${formParams.toString()}`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.error('Error sending to Google Sheet:', err);
    }
  }

  // 2. Respaldo simultáneo en Netlify Forms
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
}
