'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import type { Locale } from '@/lib'
import { cityTimeZones } from '@/lib/timezones'

type Props = {
  locale: Locale
}

function formatTime(timeZone: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone,
  }).format(new Date())
}

export function WorldClockList({ locale }: Props) {
  const [, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick((prev) => prev + 1), 1000)
    return () => clearInterval(id)
  }, [])

  const rows = cityTimeZones.map((city) => ({
    ...city,
    time: formatTime(city.timeZone, locale),
  }))

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {rows.map((city) => (
        <li key={city.slug} className="rounded-xl border border-border p-3">
          <Link
            href={`/${locale}/time-in/${city.slug}`}
            className="flex items-center justify-between gap-3"
          >
            <span className="text-foreground">{city.names[locale]}</span>
            <span className="font-mono text-foreground-muted">{city.time}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
