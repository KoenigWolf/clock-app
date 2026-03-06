import { useSyncExternalStore } from 'react'

type TimeDigits = {
  hours: string
  minutes: string
  seconds: string
}

export type RawTimeState = TimeDigits & {
  rawDate: Date
}

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

  if (currentSecond !== lastSecond) {
    lastSecond = currentSecond
    currentTime = calculateTime()
    listeners.forEach((listener) => listener())
  }
}

function startTicking() {
  if (intervalId === null && listeners.size > 0) {
    currentTime = calculateTime()
    lastSecond = new Date().getSeconds()
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

export function useTime(): RawTimeState | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

export function __resetTimeStore() {
  stopTicking()
  currentTime = null
  listeners = new Set()
  lastSecond = -1
}
