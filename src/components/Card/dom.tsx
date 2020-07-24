import React from 'react'

//----------------------------------
// props
//----------------------------------
export interface CardProps {
  className?: string
  children: React.ReactNode
}

//----------------------------------
// component
//----------------------------------
export const CardComponent = (props: CardProps) => (
  <div className={`${props.className}`}>{props.children}</div>
)
