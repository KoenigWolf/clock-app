'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { useState } from 'react'

import { LanguageSwitcher } from './LanguageSwitcher'

export function HomeUtilityMenu() {
  const [open, setOpen] = useState(false)
  const locale = useLocale()
  const t = useTranslations('seoPages.home')

  return (
    <div className="absolute right-[2.36%] top-[2.36%] z-20">
      <div className="flex items-center gap-2">
        <LanguageSwitcher />
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-border bg-background-overlay text-foreground-muted transition-colors hover:text-foreground"
          aria-label={open ? 'Close menu' : 'Open menu'}
          title={open ? 'Close menu' : 'Open menu'}
        >
          {open ? (
            <X aria-hidden="true" className="h-[1.05rem] w-[1.05rem]" />
          ) : (
            <Menu aria-hidden="true" className="h-[1.05rem] w-[1.05rem]" />
          )}
        </button>
      </div>

      {open ? (
        <div className="mt-2 w-[12rem] rounded-xl border border-border bg-background p-2 shadow-lg">
          <ul className="grid gap-1">
            <li>
              <Link
                href={`/${locale}/world-clock`}
                className="block rounded-lg px-3 py-2 text-sm text-foreground-muted transition-colors hover:bg-background-overlay hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {t('worldClock')}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/utc-converter`}
                className="block rounded-lg px-3 py-2 text-sm text-foreground-muted transition-colors hover:bg-background-overlay hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {t('utcConverter')}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/time-in/tokyo`}
                className="block rounded-lg px-3 py-2 text-sm text-foreground-muted transition-colors hover:bg-background-overlay hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {t('timeInCity')}
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  )
}
