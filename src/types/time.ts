type TimeDigits = {
  hours: string
  minutes: string
  seconds: string
}

export type RawTimeState = TimeDigits & {
  rawDate: Date
}
