import { NextIntlClientProvider } from 'next-intl'
import type { ReactNode } from 'react'

import { defaultLocale, type Locale } from '@/lib'

import enMessages from '../../messages/en.json'
import jaMessages from '../../messages/ja.json'

const messages: Record<Locale, typeof jaMessages> = {
  ja: jaMessages,
  en: enMessages,
}

type IntlWrapperProps = {
  children: ReactNode
  locale?: Locale
}

export function IntlWrapper({
  children,
  locale = defaultLocale,
}: IntlWrapperProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages[locale]}>
      {children}
    </NextIntlClientProvider>
  )
}
