import React from 'react'
import { Typography } from '../Typography'

//----------------------------------
// props
//----------------------------------
export interface HeroProps {
  imgPath: string
  copies: string[]
  descs: string[]
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const HeroComponent = (props: HeroProps) => (
  <div className={props.className}>
    <div className={'heroWrapper'}>
      <div className={'hero'}>
        <div className={'heroCopyWrapper'}>
          {props.copies.map((copy: string, index: number) => {
            return (
              <Typography key={index} component={'p'} className="copy">
                {copy}
              </Typography>
            )
          })}
        </div>
        <div className={'heroDescWrapper'}>
          {props.descs.map((desc: string, index: number) => {
            return (
              <Typography key={index} component={'p'} className="desc">
                {desc}
              </Typography>
            )
          })}
        </div>
      </div>
    </div>
  </div>
)
