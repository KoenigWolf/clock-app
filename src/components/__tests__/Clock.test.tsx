import { render, screen, act } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { Clock } from '../Clock'

describe('Clock', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2024, 0, 15, 10, 30, 45))
  })

  afterEach(() => {
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

    expect(screen.getByText('2024年1月15日 (月)')).toBeDefined()
  })

  it('updates time every second', () => {
    render(<Clock />)

    expect(screen.getByText('45')).toBeDefined()

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.getByText('46')).toBeDefined()
  })

  it('has proper accessibility attributes', () => {
    render(<Clock />)

    expect(screen.getByRole('timer')).toBeDefined()
    expect(screen.getByRole('status')).toBeDefined()
  })

  it('has accessible labels', () => {
    render(<Clock />)

    const timer = screen.getByRole('timer')
    expect(timer.getAttribute('aria-label')).toBeDefined()
  })
})
