import React from 'react'

//----------------------------------
// props
//----------------------------------
export interface LogoComponentProps {
  routeMatch?: boolean
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const LogoComponent = (props: LogoComponentProps) => (
  <figure className={props.className}>
    <img width="120px" height="30px" src="/shared/logo.svg" alt="Paletto." />
  </figure>
)
