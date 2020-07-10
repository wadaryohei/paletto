import React from 'react'
import { Box, Typography } from '@material-ui/core'

//----------------------------------
// props
//----------------------------------
export interface HeroProps {
  imgPath: string
  copyEn: string
  copyEnHighlight: string
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
        <Typography className="copy copyEn" component={'p'}>
          {props.copyEn}
        </Typography>
        <Typography className="copy copyEnHighlight" component={'h2'}>
          {props.copyEnHighlight}
        </Typography>
        <Typography className="copy copyJp" component={'p'}>
          {props.copyJp}
        </Typography>
      </Box>
    </figure>
  </Box>
)
