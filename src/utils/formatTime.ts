import { DAYS } from '@/constants/days'
import type { TimeState } from '@/types/time'

/**
 * Validates if the given value is a valid Date object
 */
export function isValidDate(date: unknown): date is Date {
  return date instanceof Date && !Number.isNaN(date.getTime())
}

/**
 * Formats a Date object into a TimeState for display
 * @returns TimeState object or null if the date is invalid
 */
export function formatTime(date: Date): TimeState | null {
  if (!isValidDate(date)) {
    return null
  }

  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const dayIndex = date.getDay()
  const weekday = DAYS[dayIndex]

  if (weekday === undefined) {
    return null
  }

  return {
    hours,
    minutes,
    seconds,
    date: `${year}年${month}月${day}日 (${weekday})`,
  }
}
