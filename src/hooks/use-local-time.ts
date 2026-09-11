import { useEffect, useState } from "react"

/** Current time in `timeZone`, formatted as "HH:mm", refreshed every 15s. */
export function useLocalTime(timeZone: string) {
  const format = () =>
    new Intl.DateTimeFormat("en-GB", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date())

  const [time, setTime] = useState(format)

  useEffect(() => {
    const id = window.setInterval(() => setTime(format()), 15_000)
    return () => window.clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone])

  return time
}

/** Hour offset of `timeZone` relative to the viewer, e.g. "+5.5h" or "same time". */
export function timeZoneOffsetLabel(timeZone: string) {
  const now = new Date()
  const there = new Date(now.toLocaleString("en-US", { timeZone }))
  const here = new Date(now.toLocaleString("en-US"))
  const diffHours = Math.round(((there.getTime() - here.getTime()) / 36e5) * 2) / 2
  if (diffHours === 0) return "same time as you"
  return `${Math.abs(diffHours)}h ${diffHours > 0 ? "ahead" : "behind"}`
}
