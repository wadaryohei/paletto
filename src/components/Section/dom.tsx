import React from 'react'
import { Box } from '@material-ui/core'

//----------------------------------
// props
//----------------------------------
export interface SectionProps {
  className?: string
  children: React.ReactNode
}

//----------------------------------
// component
//----------------------------------
export const SectionComponent = (props: SectionProps) => (
  <Box className={props.className}>{props.children}</Box>
)
