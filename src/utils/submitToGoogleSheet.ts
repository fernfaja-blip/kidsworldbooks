export interface SheetSubmissionPayload {
  formType: 'Contacto (/contact-us)' | 'Suscripción Guías (/)';
  fullName: string;
  email: string;
  organization: string;
  topic: string;
  message: string;
}

// Reemplaza esta constante (o define VITE_GOOGLE_SHEETS_WEBHOOK_URL en Netlify)
// con la URL Web App de Apps Script generada en el Google Sheet:
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

  // 1. Si está configurada la URL Web App de Google Sheets, envía la fila a Google Drive
  if (GOOGLE_SHEETS_WEBHOOK_URL) {
    try {
      await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
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

  // 2. Respaldo simultáneo en Netlify Forms (si el sitio corre en Netlify)
  try {
    const formData = new URLSearchParams();
    formData.append('form-name', 'kidsworldbooks-leads');
    formData.append('timestamp', timestamp);
    formData.append('formType', payload.formType);
    formData.append('fullName', payload.fullName);
    formData.append('email', payload.email);
    formData.append('organization', payload.organization);
    formData.append('topic', payload.topic);
    formData.append('message', payload.message);

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    });
  } catch {
    // Ignore local dev fallback error
  }
}
