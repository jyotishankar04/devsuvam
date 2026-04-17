import type { HTMLMotionProps } from "motion/react";

export const fadeIn: HTMLMotionProps<"div">["variants"] = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export const fadeUp: HTMLMotionProps<"div">["variants"] = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const fadeDown: HTMLMotionProps<"div">["variants"] = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export const scaleIn: HTMLMotionProps<"div">["variants"] = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

export const slideInLeft: HTMLMotionProps<"div">["variants"] = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export const slideInRight: HTMLMotionProps<"div">["variants"] = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export const staggerContainer: HTMLMotionProps<"div">["variants"] = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1, ease: "easeOut" },
  },
};

export const staggerItem: HTMLMotionProps<"div">["variants"] = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export const staggerItemFast: HTMLMotionProps<"div">["variants"] = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

export const buttonTap = { scale: 0.97 };
export const buttonHover = { scale: 1.02 };
export const cardHover = { y: -4, transition: { duration: 0.2, ease: "easeOut" } };

export const springTransition = { type: "spring" as const, stiffness: 400, damping: 30 };
export const smoothTransition = { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const };

export function useReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
