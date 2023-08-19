import React from 'react'

//----------------------------------
// props
//----------------------------------
export interface Props {
  children: React.ReactNode
}

//----------------------------------
// component
//----------------------------------
export const Index = (props: Props) => <main>{props.children}</main>
