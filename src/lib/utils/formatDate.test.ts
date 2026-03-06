import { describe, expect, it } from 'vitest'

import { formatLocalizedDate } from './formatDate'

const jaWeekdays = {
  sunday: '日',
  monday: '月',
  tuesday: '火',
  wednesday: '水',
  thursday: '木',
  friday: '金',
  saturday: '土',
}

const enWeekdays = {
  sunday: 'Sun',
  monday: 'Mon',
  tuesday: 'Tue',
  wednesday: 'Wed',
  thursday: 'Thu',
  friday: 'Fri',
  saturday: 'Sat',
}

describe('formatLocalizedDate', () => {
  describe('Japanese locale', () => {
    it('formats date in Japanese format', () => {
      const date = new Date(2024, 0, 15, 12, 0, 0)
      const result = formatLocalizedDate(date, 'ja', jaWeekdays)

      expect(result).toBe('2024年1月15日 (月)')
    })

    it('formats midnight correctly', () => {
      const date = new Date(2024, 0, 1, 0, 0, 0)
      const result = formatLocalizedDate(date, 'ja', jaWeekdays)

      expect(result).toBe('2024年1月1日 (月)')
    })

    it('formats end of year correctly', () => {
      const date = new Date(2024, 11, 31, 23, 59, 59)
      const result = formatLocalizedDate(date, 'ja', jaWeekdays)

      expect(result).toBe('2024年12月31日 (火)')
    })

    it('returns all weekdays correctly', () => {
      const weekdays = ['日', '月', '火', '水', '木', '金', '土']

      for (let i = 0; i < 7; i++) {
        const date = new Date(2024, 0, 7 + i, 12, 0, 0)
        const result = formatLocalizedDate(date, 'ja', jaWeekdays)
        expect(result).toContain(`(${weekdays[i]})`)
      }
    })
  })

  describe('English locale', () => {
    it('formats date in English format', () => {
      const date = new Date(2024, 0, 15, 12, 0, 0)
      const result = formatLocalizedDate(date, 'en', enWeekdays)

      expect(result).toBe('Mon, Jan 15, 2024')
    })

    it('formats end of year correctly', () => {
      const date = new Date(2024, 11, 31, 23, 59, 59)
      const result = formatLocalizedDate(date, 'en', enWeekdays)

      expect(result).toBe('Tue, Dec 31, 2024')
    })

    it('returns all weekdays correctly', () => {
      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

      for (let i = 0; i < 7; i++) {
        const date = new Date(2024, 0, 7 + i, 12, 0, 0)
        const result = formatLocalizedDate(date, 'en', enWeekdays)
        expect(result).toContain(weekdays[i])
      }
    })
  })
})
