'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

import { EarthIcon } from '@/components/ui'
import { locales, type Locale } from '@/lib'

const LABELS: Record<Locale, string> = {
  ja: '日本語',
  en: 'English',
  es: 'Español',
  pt: 'Português',
  fr: 'Français',
  de: 'Deutsch',
  hi: 'हिन्दी',
}

export function LanguageSwitcher() {
  const rawLocale = useLocale()
  const locale: Locale = locales.includes(rawLocale as Locale)
    ? (rawLocale as Locale)
    : locales[0]
  const router = useRouter()
  const pathname = usePathname()
  const currentIndex = locales.indexOf(locale)
  const nextLocale = locales[(currentIndex + 1) % locales.length] ?? locales[0]

  const handleToggle = () => {
    const localePattern = new RegExp(`^/${locale}(?=/|$)`)
    const newPathname = pathname.replace(localePattern, `/${nextLocale}`)
    router.push(newPathname)
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="group flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-border bg-background-overlay text-foreground-muted transition-colors hover:text-foreground"
      aria-label={`Switch language to ${LABELS[nextLocale]}`}
      title={`${LABELS[locale]} -> ${LABELS[nextLocale]}`}
    >
      <EarthIcon className="h-[1.05rem] w-[1.05rem] transition-[filter,opacity] duration-200 ease-out group-hover:opacity-100 group-hover:brightness-125" />
    </button>
  )
}
