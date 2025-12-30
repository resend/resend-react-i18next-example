'use server';

import { Resend } from 'resend';
import Pricing from '@/emails/pricing';
import type { Locale } from '@/lib/i18n';

export async function sendEmail(locale: Locale) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const response = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Pricing discount',
    react: <Pricing locale={locale as Locale} />,
  });

  if (response.error) {
    throw new Error('Could not send email', {
      cause: response.error,
    });
  }

  console.info(response.data);
}
