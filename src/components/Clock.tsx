'use client'

import { useTime } from '@/hooks/useTime'

import { DateDisplay } from './DateDisplay'
import { TimeDisplay } from './TimeDisplay'

const LOADING_PLACEHOLDER = '--:--'

export function Clock() {
  const time = useTime()

  if (!time) {
    return (
      <div
        className="select-none text-center"
        role="status"
        aria-label="時刻を読み込み中"
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

  return (
    <div className="select-none text-center">
      <TimeDisplay
        hours={time.hours}
        minutes={time.minutes}
        seconds={time.seconds}
      />
      <DateDisplay date={time.date} />
    </div>
  )
}
