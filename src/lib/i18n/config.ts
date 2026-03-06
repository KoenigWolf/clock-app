export const locales = ['ja', 'en', 'es', 'pt', 'fr', 'de', 'hi'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'ja'
