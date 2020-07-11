import React from 'react'
import { Box, Typography } from '@material-ui/core'

//----------------------------------
// props
//----------------------------------
export interface HeroProps {
  imgPath: string
  copyEnFirst: string
  copyEnSecond: string
  copyJp: string
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const HeroComponent = (props: HeroProps) => (
  <Box className={props.className}>
    <figure style={{ backgroundImage: `url(${props.imgPath})` }}>
      <Box className={'hero'}>
        <Typography className="copy copyJp" component={'p'}>
          {props.copyJp}
        </Typography>
        <Typography className="copy copyEn" component={'h2'}>
          {props.copyEnFirst}
        </Typography>
        <Typography className="copy copyEn" component={'h2'}>
          {props.copyEnSecond}
        </Typography>
      </Box>
    </figure>
  </Box>
)
