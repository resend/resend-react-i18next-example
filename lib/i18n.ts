export const validLocales = ['en', 'pt'] as const;
export type Locale = (typeof validLocales)[number];

export const messagesPerLocale: Record<Locale, Record<string, string>> = {
  pt: {
    'home.submit': 'Enviar em Português',
    'home.switch-language-link': 'Ir para outra tradução',
    'email.preview':
      'Oferta Exclusiva Só Para Você: Desbloqueie Funcionalidades com $12/mês',
    'email.exclusive-offer': 'Oferta Exclusiva',
    'email.per-month': '/ mês',
    'email.copy':
      'Criamos o plano perfeito especialmente adaptado às suas necessidades. Desbloqueie recursos premium com um valor imbatível.',
    'email.feature-0': 'Gerencie até 25 produtos premium',
    'email.feature-1': 'Aumente seu público com 10.000 assinantes',
    'email.feature-2': 'Tome decisões baseadas em dados com análises avançadas',
    'email.feature-3': 'Suporte prioritário com tempo de resposta de 24 horas',
    'email.feature-4': 'Integração perfeita com suas ferramentas favoritas',
    'email.call-to-action': 'Reivindique Sua Oferta Especial',
    'email.urgency-note':
      'Oferta por tempo limitado - Atualize agora e economize 20%',
    'email.free-notice':
      'Não é necessário cartão de crédito. Teste gratuito de 14 dias disponível.',
  },
  en: {
    'home.submit': 'Submit in English',
    'home.switch-language-link': 'Go to other translation',
    'email.preview':
      'Exclusive Offer Just For You: Unlock Premium Features at $12/month',
    'email.exclusive-offer': 'Exclusive Offer',
    'email.per-month': '/ month',
    'email.copy':
      "We've handcrafted the perfect plan tailored specifically for your needs. Unlock premium features at an unbeatable value.",
    'email.feature-0': 'Manage up to 25 premium products',
    'email.feature-1': 'Grow your audience with 10,000 subscribers',
    'email.feature-2': 'Make data-driven decisions with advanced analytics',
    'email.feature-3': 'Priority support with 24-hour response time',
    'email.feature-4': 'Seamless integration with your favorite tools',
    'email.call-to-action': 'Claim Your Special Offer',
    'email.urgency-note': 'Limited time offer - Upgrade now and save 20%',
    'email.free-notice':
      'No credit card required. 14-day free trial available.',
  },
};
