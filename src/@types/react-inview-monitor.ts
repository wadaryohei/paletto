declare module 'react-inview-monitor' {
  function InViewMonitor(
    children?: any,
    classNameNotInView?: string,
    classNameInView?: string,
    classNameAboveView?: string,
    intoViewMargin?: string,
    onInView?: () => void,
    onNotInView?: () => void,
  ): any
  export default InViewMonitor
}
