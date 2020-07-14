import React from 'react'
import { Box } from '@material-ui/core'

//----------------------------------
// props
//----------------------------------
export interface CardProps {
  className?: string
  children: React.ReactNode
}

//----------------------------------
// component
//----------------------------------
export const CardComponent = (props: CardProps) => {
  return <Box className={`${props.className}`}>{props.children}</Box>
}
