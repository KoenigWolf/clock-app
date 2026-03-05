'use client'

import { useCallback, useEffect, useState } from 'react'

import type { TimeState } from '@/types/time'
import { formatTime } from '@/utils/formatTime'

import { DateDisplay } from './DateDisplay'
import { TimeDisplay } from './TimeDisplay'

const LOADING_PLACEHOLDER = '--:--'
const UPDATE_INTERVAL_MS = 1000

function getInitialTime(): TimeState | null {
  return formatTime(new Date())
}

export function Clock() {
  const [time, setTime] = useState<TimeState | null>(null)
  const [isClient, setIsClient] = useState(false)

  const updateTime = useCallback(() => {
    const newTime = formatTime(new Date())
    if (newTime) {
      setTime(newTime)
    }
  }, [])

  useEffect(() => {
    setIsClient(true)
    const initialTime = getInitialTime()
    if (initialTime) {
      setTime(initialTime)
    }

    const interval = setInterval(updateTime, UPDATE_INTERVAL_MS)

    return () => {
      clearInterval(interval)
    }
  }, [updateTime])

  if (!isClient || !time) {
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
