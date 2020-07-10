export const BreakPoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
} as const

// @see この概念を関数にしただけ
// https://jsramblings.com/how-to-use-media-queries-with-styled-components/

/**
 * maxWidthメディアクエリー
 */
export const max = (maxWidth: number): string => {
  return `(max-width: ${maxWidth}px)`
}

/**
 * minWidthメディアクエリー
 */
export const min = (minWidth: number): string => {
  return `(min-width: ${minWidth}px)`
}
