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
        <button type="submit">{t('submit')}</button>
      </form>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <a href="/en">
          {t('switch-to-en')}
        </a>
        <a href="/es">
          {t('switch-to-es')}
        </a>
        <a href="/pt">
          {t('switch-to-pt')}
        </a>
      </div>
    </>
  );
}
