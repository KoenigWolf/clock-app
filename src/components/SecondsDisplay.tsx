import { memo } from 'react'

type Props = {
  seconds: string
}

export const SecondsDisplay = memo(
  function SecondsDisplay({ seconds }: Props) {
    return (
      <span
        className="ml-2 align-top text-[0.4em] tabular-nums text-white/50"
        aria-hidden="true"
      >
        {seconds}
      </span>
    )
  },
  (prev, next) => prev.seconds === next.seconds
)
