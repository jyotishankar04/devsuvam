import { useSyncExternalStore } from "react"
import { tiks } from "@rexa-developer/tiks"

const STORAGE_KEY = "sound-muted"

const readMuted = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1"
  } catch {
    return false
  }
}

let muted = readMuted()
const listeners = new Set<() => void>()

// tiks creates its AudioContext lazily on the first user gesture and auto-mutes
// under prefers-reduced-motion.
tiks.init({ theme: "soft", volume: 0.5, muted })

export function setSoundMuted(next: boolean) {
  muted = next
  try {
    localStorage.setItem(STORAGE_KEY, next ? "1" : "0")
  } catch {
    // ignore storage failures (private mode, etc.)
  }
  if (next) tiks.mute()
  else tiks.unmute()
  listeners.forEach((listener) => listener())
}

export function useSoundMuted() {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    () => muted
  )
}

export const sound = {
  click: () => tiks.click(),
  toggle: (on: boolean) => tiks.toggle(on),
  success: () => tiks.success(),
  pop: () => tiks.pop(),
  swoosh: () => tiks.swoosh(),
}
