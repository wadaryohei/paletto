import React from 'react'

//----------------------------------
// props
//----------------------------------
export interface Props {
  routeMatch?: boolean
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const Index = (props: Props) => (
  <figure className={props.className}>
    <img width="120px" height="30px" src="/shared/logo.svg" alt="Paletto." />
  </figure>
)
