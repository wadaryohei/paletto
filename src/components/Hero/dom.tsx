/**
 * DOM
 */
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
  <Box display={'block'} className={props.className}>
    <figure style={{ backgroundImage: `url(${props.imgPath})` }}>
      <div>
        <Typography component={'p'}>{props.copyEn}</Typography>
        <Typography component={'h2'}>{props.copyEnHighlight}</Typography>
        <Typography component={'p'}>{props.copyJp}</Typography>
      </div>
    </figure>
  </Box>
)