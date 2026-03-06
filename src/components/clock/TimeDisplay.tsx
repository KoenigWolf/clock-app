'use client'

import { useTranslations } from 'next-intl'
import { memo } from 'react'

import { HoursMinutesDisplay } from './HoursMinutesDisplay'
import { SecondsDisplay } from './SecondsDisplay'

type Props = {
  hours: string
  minutes: string
  seconds: string
}

export const TimeDisplay = memo(function TimeDisplay({
  hours,
  minutes,
  seconds,
}: Props) {
  const t = useTranslations('time')
  const timeLabel = t('ariaLabel', { hours, minutes, seconds })

  return (
    <div
      role="timer"
      aria-label={timeLabel}
      className="relative inline-flex items-baseline text-[clamp(3.82rem,16.18vw,10rem)] font-extralight tracking-[0.02em] text-foreground drop-shadow-glow will-change-contents"
    >
      <HoursMinutesDisplay hours={hours} minutes={minutes} />
      <SecondsDisplay seconds={seconds} />
    </div>
  )
})
