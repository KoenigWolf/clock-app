import { render, screen, act } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { __resetTimeStore } from '@/hooks/useTime'

import { Clock } from '../Clock'

describe('Clock', () => {
  beforeEach(() => {
    __resetTimeStore()
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2024, 0, 15, 10, 30, 45, 0))
  })

  afterEach(() => {
    __resetTimeStore()
    vi.useRealTimers()
  })

  it('renders the current time', () => {
    render(<Clock />)

    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('30')).toBeInTheDocument()
    expect(screen.getByText('45')).toBeInTheDocument()
  })

  it('renders the current date in Japanese format', () => {
    render(<Clock />)

    expect(screen.getByText('2024年1月15日 (月)')).toBeInTheDocument()
  })

  it('updates time when second changes', () => {
    render(<Clock />)

    expect(screen.getByText('45')).toBeInTheDocument()

    act(() => {
      vi.setSystemTime(new Date(2024, 0, 15, 10, 30, 46, 0))
      vi.advanceTimersByTime(100)
    })

    expect(screen.getByText('46')).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<Clock />)

    expect(screen.getByRole('timer')).toBeInTheDocument()
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('has accessible labels', () => {
    render(<Clock />)

    const timer = screen.getByRole('timer')
    expect(timer).toHaveAttribute('aria-label', '現在時刻 10時30分45秒')
  })
})
