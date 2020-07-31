export const Motion = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.86, 0, 0.07, 1],
    },
  },
  exit: {
    y: 40,
    scale: 0.98,
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.86, 0, 0.07, 1],
    },
  },
} as const
