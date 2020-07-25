import React from 'react'
import { Section } from '../../../../../components/Section'

//----------------------------------
// props
//----------------------------------
export interface SectionWrapperProps {
  className?: string
  children: React.ReactNode
}

//----------------------------------
// component
//----------------------------------
export const SectionWrapperComponent = (props: SectionWrapperProps) => (
  <Section className={props.className}>{props.children}</Section>
)
