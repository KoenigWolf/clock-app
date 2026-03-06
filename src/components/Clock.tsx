'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { useTime } from '@/hooks/useTime'
import { defaultLocale, locales, type Locale } from '@/i18n/config'
import { formatLocalizedDate } from '@/utils/formatDate'

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
          className="text-8xl font-extralight text-white/20"
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
