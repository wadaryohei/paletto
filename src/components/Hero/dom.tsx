import React from 'react'
import { Typography } from '@material-ui/core'

//----------------------------------
// props
//----------------------------------
export interface HeroProps {
  imgPath: string
  copies: string[]
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const HeroComponent = (props: HeroProps) => (
  <div className={props.className}>
    <figure style={{ backgroundImage: `url(${props.imgPath})` }}>
      <div className={'hero'}>
        {props.copies.map((copy: string, index: number) => {
          return (
            <Typography key={index} className="copy" component={'p'}>
              {copy}
            </Typography>
          )
        })}
      </div>
    </figure>
  </div>
)
