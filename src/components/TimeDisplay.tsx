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
      className="text-[clamp(4rem,15vw,10rem)] font-extralight tracking-wide text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] will-change-contents contain-layout contain-paint"
    >
      <HoursMinutesDisplay hours={hours} minutes={minutes} />
      <SecondsDisplay seconds={seconds} />
    </div>
  )
})
