import { notFound } from 'next/navigation';
import { createIntl } from 'react-intl';
import { sendEmail } from '@/actions/send-email';
import { type Locale, messagesPerLocale, validLocales } from '@/lib/i18n';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  if (!validLocales.includes(locale)) {
    notFound();
  }

  const { formatMessage } = createIntl({
    messages: messagesPerLocale[locale],
    locale,
  });

  return (
    <>
      <form
        action={async () => {
          'use server';
          await sendEmail(locale);
        }}
      >
        <button type="submit">{formatMessage({ id: 'home.submit' })}</button>
      </form>
      <a href={locale === 'en' ? '/pt' : '/en'}>
        {formatMessage({ id: 'home.switch-language-link' })}
      </a>
    </>
  );
}
