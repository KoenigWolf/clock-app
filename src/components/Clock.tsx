'use client'

import { useState, useEffect } from 'react'

type TimeState = {
  hours: string
  minutes: string
  seconds: string
  date: string
}

const DAYS = ['日', '月', '火', '水', '木', '金', '土'] as const

function formatTime(date: Date): TimeState {
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const weekday = DAYS[date.getDay()]

  return {
    hours,
    minutes,
    seconds,
    date: `${year}年${month}月${day}日 (${weekday})`,
  }
}

export function Clock() {
  const [time, setTime] = useState<TimeState | null>(null)

  useEffect(() => {
    setTime(formatTime(new Date()))

    const interval = setInterval(() => {
      setTime(formatTime(new Date()))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!time) {
    return (
      <div className="text-center">
        <div className="text-8xl font-extralight text-white/20">--:--</div>
      </div>
    )
  }

  return (
    <div className="text-center select-none">
      <div className="text-[clamp(4rem,15vw,10rem)] font-extralight tracking-wide text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
        <span className="tabular-nums">{time.hours}</span>
        <span className="animate-pulse mx-1">:</span>
        <span className="tabular-nums">{time.minutes}</span>
        <span className="text-[0.4em] text-white/50 align-top ml-2 tabular-nums">
          {time.seconds}
        </span>
      </div>
      <p className="text-xl text-white/60 font-light mt-4 tracking-wider">
        {time.date}
      </p>
    </div>
  )
}
