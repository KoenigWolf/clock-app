'use client'

import { Globe } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { useMemo } from 'react'

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
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()

  const sortedLocales = useMemo(
    () => [locale, ...locales.filter((entry) => entry !== locale)],
    [locale]
  )

  const handleChange = (nextLocale: Locale) => {
    const localePattern = new RegExp(`^/${locale}(?=/|$)`)
    const newPathname = pathname.replace(localePattern, `/${nextLocale}`)
    router.push(newPathname)
  }

  return (
    <label className="relative flex min-h-[44px] items-center gap-2 rounded-full border border-border bg-background-overlay px-3 text-foreground-muted transition-colors hover:text-foreground">
      <Globe
        strokeWidth={1.5}
        aria-hidden="true"
        className="h-[1rem] w-[1rem]"
      />
      <span className="sr-only">Select language</span>
      <select
        value={locale}
        onChange={(event) => handleChange(event.target.value as Locale)}
        className="min-w-[6.25rem] bg-transparent text-sm outline-none"
        aria-label="Select language"
      >
        {sortedLocales.map((entry) => (
          <option key={entry} value={entry} className="text-black">
            {LABELS[entry]}
          </option>
        ))}
      </select>
    </label>
  )
}
