import { memo } from 'react'

type Props = {
  hours: string
  minutes: string
}

export const HoursMinutesDisplay = memo(
  function HoursMinutesDisplay({ hours, minutes }: Props) {
    return (
      <span className="inline-grid grid-cols-[1fr_auto_1fr] items-center">
        <span className="text-right tabular-nums">{hours}</span>
        <span className="colon-pulse gpu-accelerated mx-1" aria-hidden="true">
          :
        </span>
        <span className="text-left tabular-nums">{minutes}</span>
      </span>
    )
  },
  (prev, next) => prev.hours === next.hours && prev.minutes === next.minutes
)
