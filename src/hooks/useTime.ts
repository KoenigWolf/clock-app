import { useSyncExternalStore } from 'react'

import type { RawTimeState } from '@/types/time'

// Singleton time store for all subscribers
let currentTime: RawTimeState | null = null
let listeners: Set<() => void> = new Set()
let intervalId: ReturnType<typeof setInterval> | null = null
let lastSecond = -1

function padZero(n: number): string {
  return n < 10 ? `0${n}` : String(n)
}

function calculateTime(): RawTimeState {
  const now = new Date()

  return {
    hours: padZero(now.getHours()),
    minutes: padZero(now.getMinutes()),
    seconds: padZero(now.getSeconds()),
    rawDate: now,
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

function getSnapshot(): RawTimeState | null {
  return currentTime
}

function getServerSnapshot(): RawTimeState | null {
  return null
}

/**
 * High-performance time hook using useSyncExternalStore
 * - Single timer shared across all components
 * - Updates only on second boundaries
 * - Automatically starts/stops based on subscribers
 * - Returns rawDate for locale-specific formatting
 */
export function useTime(): RawTimeState | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

// Reset function for testing
export function __resetTimeStore() {
  stopTicking()
  currentTime = null
  listeners = new Set()
  lastSecond = -1
}
