'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

import { locales, type Locale } from '@/i18n/config'

const localeNames: Record<Locale, string> = {
  ja: '日本語',
  en: 'English',
}

export function LanguageSwitcher() {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()

  const handleLocaleChange = (newLocale: Locale) => {
    const localePattern = new RegExp(`^/${locale}(?=/|$)`)
    const newPathname = pathname.replace(localePattern, `/${newLocale}`)
    router.push(newPathname)
  }

  return (
    <div className="flex gap-2">
      {locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => handleLocaleChange(loc)}
          className={`rounded px-3 py-1 text-sm transition-colors ${
            locale === loc
              ? 'bg-white/20 text-white'
              : 'text-white/60 hover:bg-white/10 hover:text-white'
          }`}
          aria-current={locale === loc ? 'page' : undefined}
        >
          {localeNames[loc]}
        </button>
      ))}
    </div>
  )
}
