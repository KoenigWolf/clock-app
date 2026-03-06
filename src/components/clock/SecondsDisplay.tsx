import { memo } from 'react'

type Props = {
  seconds: string
}

export const SecondsDisplay = memo(
  function SecondsDisplay({ seconds }: Props) {
    return (
      <span
        className="absolute left-full top-[0.1em] ml-[0.12em] text-[0.382em] tabular-nums text-foreground-muted"
        aria-hidden="true"
      >
        {seconds}
      </span>
    )
  },
  (prev, next) => prev.seconds === next.seconds
)
