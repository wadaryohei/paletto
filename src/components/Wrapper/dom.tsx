import React from 'react'
import { Section } from '../Section'

//----------------------------------
// props
//----------------------------------
export interface WrapperProps {
  className?: string
  children: React.ReactNode
}

//----------------------------------
// component
//----------------------------------
export const WrapperComponent = (props: WrapperProps) => (
  <Section className={props.className}>{props.children}</Section>
)
