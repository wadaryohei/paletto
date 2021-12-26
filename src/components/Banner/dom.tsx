import React from 'react'

//----------------------------------
// props
//----------------------------------
export interface BannerProps {
  className?: string
  imgPath: string
  children?: React.ReactNode
}

//----------------------------------
// component
//----------------------------------
export const BannerComponent = (props: BannerProps) => (
  <figure className={props.className} style={{ backgroundImage: `url(${props.imgPath})` }}>
    {props.children}
  </figure>
)
