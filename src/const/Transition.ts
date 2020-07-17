/**
 * ホバー時のトランジション
 */
export const hover = (ms: number): string => {
  return `all ${ms}ms ease-in-out`
}

/**
 * ホバーが外れた時のトランジション
 */
export const unHover = (ms: number): string => {
  return `all ${ms}ms ease-in-out`
}
