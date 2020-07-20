import React from 'react'
import { Typography } from '@material-ui/core'

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
        <div className={'copyWrapper'}>
          {props.copies.map((copy: string, index: number) => {
            return (
              <Typography key={index} className="copy" component={'p'}>
                {copy}
              </Typography>
            )
          })}
        </div>
        <div className={'descWrapper'}>
          {props.descs.map((desc: string, index: number) => {
            return (
              <Typography key={index} className="desc" component={'p'}>
                {desc}
              </Typography>
            )
          })}
        </div>
      </div>
    </div>
  </div>
)
