import { useSyncExternalStore } from 'react'

import { DAYS } from '@/constants/days'
import type { TimeState } from '@/types/time'

// Singleton time store for all subscribers
let currentTime: TimeState | null = null
let listeners: Set<() => void> = new Set()
let intervalId: ReturnType<typeof setInterval> | null = null
let lastSecond = -1

function padZero(n: number): string {
  return n < 10 ? `0${n}` : String(n)
}

function calculateTime(): TimeState | null {
  const now = new Date()
  const dayIndex = now.getDay()
  const weekday = DAYS[dayIndex]

  if (weekday === undefined) {
    return null
  }

  return {
    hours: padZero(now.getHours()),
    minutes: padZero(now.getMinutes()),
    seconds: padZero(now.getSeconds()),
    date: `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日 (${weekday})`,
  }
}

function tick() {
  const now = new Date()
  const currentSecond = now.getSeconds()

  // Only update and notify if second changed
  if (currentSecond !== lastSecond) {
    lastSecond = currentSecond
    currentTime = calculateTime()

    // Notify all subscribers
    listeners.forEach((listener) => listener())
  }
}

function startTicking() {
  if (intervalId === null && listeners.size > 0) {
    currentTime = calculateTime()
    lastSecond = new Date().getSeconds()

    // Use 100ms interval to catch second changes accurately
    // while minimizing CPU usage (10 checks per second vs 1000)
    intervalId = setInterval(tick, 100)
  }
}

function stopTicking() {
  if (intervalId !== null) {
    clearInterval(intervalId)
    intervalId = null
    lastSecond = -1
  }
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener)

  if (listeners.size === 1) {
    startTicking()
  }

  return () => {
    listeners.delete(listener)

    if (listeners.size === 0) {
      stopTicking()
    }
  }
}

function getSnapshot(): TimeState | null {
  return currentTime
}

function getServerSnapshot(): TimeState | null {
  return null
}

/**
 * High-performance time hook using useSyncExternalStore
 * - Single timer shared across all components
 * - Updates only on second boundaries
 * - Automatically starts/stops based on subscribers
 * - Optimized to minimize re-renders
 */
export function useTime(): TimeState | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

// Reset function for testing
export function __resetTimeStore() {
  stopTicking()
  currentTime = null
  listeners = new Set()
  lastSecond = -1
}
