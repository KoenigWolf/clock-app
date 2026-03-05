import { NextIntlClientProvider } from 'next-intl'
import type { ReactNode } from 'react'

import enMessages from '../../messages/en.json'
import jaMessages from '../../messages/ja.json'

const messages = {
  ja: jaMessages,
  en: enMessages,
}

type Locale = 'ja' | 'en'

type IntlWrapperProps = {
  children: ReactNode
  locale?: Locale
}

export function IntlWrapper({ children, locale = 'ja' }: IntlWrapperProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages[locale]}>
      {children}
    </NextIntlClientProvider>
  )
}
