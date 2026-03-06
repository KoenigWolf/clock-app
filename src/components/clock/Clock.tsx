'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { defaultLocale, formatLocalizedDate, locales, type Locale } from '@/lib'
import { useTime } from '@/lib/hooks'

import { DateDisplay } from './DateDisplay'
import { TimeDisplay } from './TimeDisplay'

const LOADING_PLACEHOLDER = '--:--:--'

export function Clock() {
  const time = useTime()
  const t = useTranslations()
  const rawLocale = useLocale()
  const locale: Locale = locales.includes(rawLocale as Locale)
    ? (rawLocale as Locale)
    : defaultLocale

  const weekdays = useMemo(
    () => ({
      sunday: t('weekdays.sunday'),
      monday: t('weekdays.monday'),
      tuesday: t('weekdays.tuesday'),
      wednesday: t('weekdays.wednesday'),
      thursday: t('weekdays.thursday'),
      friday: t('weekdays.friday'),
      saturday: t('weekdays.saturday'),
    }),
    [t]
  )

  if (!time) {
    return (
      <div
        className="select-none text-center"
        role="status"
        aria-label={t('time.loading')}
      >
        <div
          className="text-8xl font-extralight text-foreground-disabled"
          aria-hidden="true"
        >
          {LOADING_PLACEHOLDER}
        </div>
      </div>
    )
  }

  const formattedDate = formatLocalizedDate(time.rawDate, locale, weekdays)

  return (
    <div className="select-none text-center">
      <TimeDisplay
        hours={time.hours}
        minutes={time.minutes}
        seconds={time.seconds}
      />
      <DateDisplay date={formattedDate} />
    </div>
  )
}
