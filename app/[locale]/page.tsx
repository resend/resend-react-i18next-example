import { notFound } from 'next/navigation';
import { sendEmail } from '@/actions/send-email';
import { type Locale, validLocales } from '@/i18n/i18n';
import { getT } from '@/i18n/get-t';

export function generateStaticParams() {
  return validLocales.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  if (!validLocales.includes(locale)) {
    notFound();
  }

  const { t } = await getT('home', locale);

  return (
    <>
      <form
        action={async () => {
          'use server';
          await sendEmail(locale);
        }}
      >
        <button type="submit">{t('home.submit')}</button>
      </form>
      <a href={locale === 'en' ? '/pt' : '/en'}>
        {t('home.switch-language-link')}
      </a>
    </>
  );
}
