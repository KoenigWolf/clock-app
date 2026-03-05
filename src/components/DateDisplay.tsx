import { memo } from 'react'

type Props = {
  date: string
}

export const DateDisplay = memo(function DateDisplay({ date }: Props) {
  return (
    <p
      role="status"
      aria-label={`今日の日付 ${date}`}
      className="mt-4 text-xl font-light tracking-wider text-white/60"
    >
      {date}
    </p>
  )
})
