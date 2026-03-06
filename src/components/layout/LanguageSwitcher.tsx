'use client'

import { Globe } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

import { locales, type Locale } from '@/lib'

export function LanguageSwitcher() {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()

  const nextLocale = locales.find((l) => l !== locale) ?? locales[0]

  const handleToggle = () => {
    const localePattern = new RegExp(`^/${locale}(?=/|$)`)
    const newPathname = pathname.replace(localePattern, `/${nextLocale}`)
    router.push(newPathname)
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="rounded-full p-2 text-foreground-muted transition-colors hover:bg-background-overlay hover:text-foreground"
      aria-label={`Switch to ${nextLocale === 'ja' ? '日本語' : 'English'}`}
      title={nextLocale === 'ja' ? '日本語' : 'English'}
    >
      <Globe size={20} strokeWidth={1.5} aria-hidden="true" />
    </button>
  )
}
