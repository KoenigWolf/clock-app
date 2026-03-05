import { memo } from 'react'

type Props = {
  hours: string
  minutes: string
}

export const HoursMinutesDisplay = memo(
  function HoursMinutesDisplay({ hours, minutes }: Props) {
    return (
      <>
        <span className="tabular-nums">{hours}</span>
        <span className="colon-pulse gpu-accelerated mx-1" aria-hidden="true">
          :
        </span>
        <span className="tabular-nums">{minutes}</span>
      </>
    )
  },
  (prev, next) => prev.hours === next.hours && prev.minutes === next.minutes
)
