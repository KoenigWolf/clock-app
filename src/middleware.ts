import createMiddleware from 'next-intl/middleware'

import { defaultLocale, locales } from '@/lib'

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
})

export const config = {
  matcher: ['/', '/(ja|en)/:path*'],
}
