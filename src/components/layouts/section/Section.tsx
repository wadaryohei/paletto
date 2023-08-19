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
export const Index = (props: Props) => <section className={props.className}>{props.children}</section>
