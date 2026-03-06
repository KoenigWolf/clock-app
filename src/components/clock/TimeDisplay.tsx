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
      className="relative inline-block text-[clamp(4rem,15vw,10rem)] font-extralight tracking-wide text-foreground drop-shadow-glow will-change-contents"
    >
      <HoursMinutesDisplay hours={hours} minutes={minutes} />
      <span className="absolute left-full top-0">
        <SecondsDisplay seconds={seconds} />
      </span>
    </div>
  )
})
