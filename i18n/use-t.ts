import { useParams } from 'next/navigation'
import { i18next } from './i18n'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export function useT(namespace: string) {
  const { locale } = useParams();
  if (typeof locale !== 'string') throw new Error('useT must be used in a dynamic route with [locale] parameter.');
  if (typeof window === 'undefined' && i18next.resolvedLanguage !== locale) {
    i18next.changeLanguage(locale)
  } else {
    const [activeLocale, setActiveLocale] = useState(i18next.resolvedLanguage)
    useEffect(() => {
      if (activeLocale === i18next.resolvedLanguage) return
      setActiveLocale(i18next.resolvedLanguage)
    }, [activeLocale, i18next.resolvedLanguage])
    useEffect(() => {
      if (!locale || i18next.resolvedLanguage === locale) return
      i18next.changeLanguage(locale)
    }, [locale, i18next])
  }
  return useTranslation(namespace);
}

