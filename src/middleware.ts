import createMiddleware from 'next-intl/middleware'

import { defaultLocale, locales } from './i18n/config'

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
})

// Keep matcher in sync with locales defined in src/i18n/config.ts
export const config = {
  matcher: ['/', '/(ja|en)/:path*'],
}
