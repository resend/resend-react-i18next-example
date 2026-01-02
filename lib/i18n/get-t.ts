import type { Locale } from './i18n';
import { i18next } from './i18n';

export async function getT(namespace: string, locale: Locale) {
  if (locale && i18next.resolvedLanguage !== locale) {
    await i18next.changeLanguage(locale)
  }
  if (namespace && !i18next.hasLoadedNamespace(namespace)) {
    await i18next.loadNamespaces(namespace)
  }
  return {
    t: i18next.getFixedT(
      locale ?? i18next.resolvedLanguage,
      Array.isArray(namespace) ? namespace[0] : namespace,
    ),
    i18n: i18next
  }
}

