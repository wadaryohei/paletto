import React from 'react'

//----------------------------------
// props
//----------------------------------
export interface Props {
  className?: string
  imgPath: string
  children?: React.ReactNode
}

//----------------------------------
// component
//----------------------------------
export const Index = (props: Props) => (
  <figure className={props.className} style={{ backgroundImage: `url(${props.imgPath})` }}>
    {props.children}
  </figure>
)
