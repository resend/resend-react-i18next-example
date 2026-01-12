import i18next from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'

export const validLocales = ['en', 'es', 'pt'] as const;
export type Locale = (typeof validLocales)[number];

i18next
  .use(initReactI18next)
  .use(resourcesToBackend((language: string, namespace: string) => import(`./messages/${language}/${namespace}.json`)))
  .init({
    supportedLngs: validLocales,
    fallbackLng: 'en',
    lng: undefined,
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator']
    },
    preload: typeof window === 'undefined' ? validLocales : [],
  });

export { i18next };
