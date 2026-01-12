'use server';

import { Resend } from 'resend';
import WelcomeEmail from '@/emails/welcome';
import { getT } from '@/i18n/get-t';
import type { Locale } from '@/i18n/i18n';

export async function sendEmail(locale: Locale) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { t } = await getT('welcome-email', locale);

  const response = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: t('header'),
    react: <WelcomeEmail name="John Lennon" locale={locale} />,
  });

  if (response.error) {
    throw new Error('Could not send email', {
      cause: response.error,
    });
  }

  console.info(response.data);
}
