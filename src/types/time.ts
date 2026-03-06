type TimeDigits = {
  hours: string
  minutes: string
  seconds: string
}

export type TimeState = TimeDigits & {
  date: string
}

export type RawTimeState = TimeDigits & {
  rawDate: Date
}
