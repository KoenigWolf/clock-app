import { describe, expect, it } from 'vitest'

import { formatTime, isValidDate } from '../formatTime'

describe('formatTime', () => {
  it('formats midnight correctly', () => {
    const date = new Date(2024, 0, 1, 0, 0, 0)
    const result = formatTime(date)

    expect(result).toEqual({
      hours: '00',
      minutes: '00',
      seconds: '00',
      date: '2024年1月1日 (月)',
    })
  })

  it('formats noon correctly', () => {
    const date = new Date(2024, 5, 15, 12, 30, 45)
    const result = formatTime(date)

    expect(result).toEqual({
      hours: '12',
      minutes: '30',
      seconds: '45',
      date: '2024年6月15日 (土)',
    })
  })

  it('formats late night correctly', () => {
    const date = new Date(2024, 11, 31, 23, 59, 59)
    const result = formatTime(date)

    expect(result).toEqual({
      hours: '23',
      minutes: '59',
      seconds: '59',
      date: '2024年12月31日 (火)',
    })
  })

  it('pads single digit hours', () => {
    const date = new Date(2024, 0, 1, 5, 0, 0)
    const result = formatTime(date)

    expect(result).not.toBeNull()
    if (result) {
      expect(result.hours).toBe('05')
    }
  })

  it('pads single digit minutes', () => {
    const date = new Date(2024, 0, 1, 12, 5, 0)
    const result = formatTime(date)

    expect(result).not.toBeNull()
    if (result) {
      expect(result.minutes).toBe('05')
    }
  })

  it('pads single digit seconds', () => {
    const date = new Date(2024, 0, 1, 12, 0, 5)
    const result = formatTime(date)

    expect(result).not.toBeNull()
    if (result) {
      expect(result.seconds).toBe('05')
    }
  })

  it('returns all weekdays correctly', () => {
    const weekdays = ['日', '月', '火', '水', '木', '金', '土']

    // 2024年1月7日 is Sunday
    for (let i = 0; i < 7; i++) {
      const date = new Date(2024, 0, 7 + i, 12, 0, 0)
      const result = formatTime(date)
      expect(result).not.toBeNull()
      if (result) {
        expect(result.date).toContain(`(${weekdays[i]})`)
      }
    }
  })

  it('returns null for invalid date', () => {
    const invalidDate = new Date('invalid')
    const result = formatTime(invalidDate)

    expect(result).toBeNull()
  })
})

describe('isValidDate', () => {
  it('returns true for valid date', () => {
    expect(isValidDate(new Date())).toBe(true)
  })

  it('returns false for invalid date', () => {
    expect(isValidDate(new Date('invalid'))).toBe(false)
  })

  it('returns false for non-Date object', () => {
    expect(isValidDate('2024-01-01' as unknown as Date)).toBe(false)
  })
})
