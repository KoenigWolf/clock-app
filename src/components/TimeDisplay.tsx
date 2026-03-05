import { memo } from 'react'

type Props = {
  hours: string
  minutes: string
  seconds: string
}

export const TimeDisplay = memo(function TimeDisplay({
  hours,
  minutes,
  seconds,
}: Props) {
  const timeLabel = `現在時刻 ${hours}時${minutes}分${seconds}秒`

  return (
    <div
      role="timer"
      aria-label={timeLabel}
      className="text-[clamp(4rem,15vw,10rem)] font-extralight tracking-wide text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
    >
      <span className="tabular-nums">{hours}</span>
      <span className="mx-1 animate-pulse" aria-hidden="true">
        :
      </span>
      <span className="tabular-nums">{minutes}</span>
      <span
        className="ml-2 align-top text-[0.4em] tabular-nums text-white/50"
        aria-hidden="true"
      >
        {seconds}
      </span>
    </div>
  )
})
