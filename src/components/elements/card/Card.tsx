import React from 'react'

//----------------------------------
// props
//----------------------------------
export interface Props {
  className?: string
  children: React.ReactNode
}

//----------------------------------
// component
//----------------------------------
export const Index = (props: Props) => <div className={`${props.className}`}>{props.children}</div>
