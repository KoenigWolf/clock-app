import type { Locale } from '@/i18n/config'

type WeekdayKey =
  | 'sunday'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'

const WEEKDAY_KEYS: WeekdayKey[] = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
]

const MONTH_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

type WeekdayTranslations = Record<WeekdayKey, string>

export function formatLocalizedDate(
  date: Date,
  locale: Locale,
  weekdays: WeekdayTranslations
): string {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const dayIndex = date.getDay()
  const weekdayKey = WEEKDAY_KEYS[dayIndex]

  if (weekdayKey === undefined) {
    return ''
  }

  const weekday = weekdays[weekdayKey]

  if (locale === 'ja') {
    return `${year}年${month}月${day}日 (${weekday})`
  }

  const monthName = MONTH_NAMES[date.getMonth()]
  return `${weekday}, ${monthName} ${day}, ${year}`
}
