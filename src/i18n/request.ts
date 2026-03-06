import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

import { locales, type Locale } from './config'

export default getRequestConfig(async ({ locale }) => {
  if (!locale || !locales.includes(locale as Locale)) {
    notFound()
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
