import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { useTime, __resetTimeStore } from '../useTime'

describe('useTime', () => {
  beforeEach(() => {
    __resetTimeStore()
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2024, 0, 15, 10, 30, 45, 0))
  })

  afterEach(() => {
    __resetTimeStore()
    vi.useRealTimers()
  })

  it('returns time data on client', () => {
    const { result } = renderHook(() => useTime())

    expect(result.current).toEqual({
      hours: '10',
      minutes: '30',
      seconds: '45',
      date: '2024年1月15日 (月)',
    })
  })

  it('updates when second changes', () => {
    const { result } = renderHook(() => useTime())

    expect(result.current?.seconds).toBe('45')

    // Move to next second
    act(() => {
      vi.setSystemTime(new Date(2024, 0, 15, 10, 30, 46, 0))
      vi.advanceTimersByTime(100) // Trigger the 100ms interval
    })

    expect(result.current?.seconds).toBe('46')
  })

  it('pads single digit values', () => {
    __resetTimeStore()
    vi.setSystemTime(new Date(2024, 0, 1, 5, 5, 5))
    const { result } = renderHook(() => useTime())

    expect(result.current?.hours).toBe('05')
    expect(result.current?.minutes).toBe('05')
    expect(result.current?.seconds).toBe('05')
  })

  it('formats date correctly', () => {
    const { result } = renderHook(() => useTime())

    expect(result.current?.date).toBe('2024年1月15日 (月)')
  })

  it('shares state between multiple hooks', () => {
    const { result: result1 } = renderHook(() => useTime())
    const { result: result2 } = renderHook(() => useTime())

    expect(result1.current).toEqual(result2.current)

    // Update time
    act(() => {
      vi.setSystemTime(new Date(2024, 0, 15, 10, 30, 46, 0))
      vi.advanceTimersByTime(100)
    })

    expect(result1.current?.seconds).toBe('46')
    expect(result2.current?.seconds).toBe('46')
  })
})
