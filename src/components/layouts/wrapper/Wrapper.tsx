import React from 'react'
import { Section } from '@/components/layouts/section'

//----------------------------------
// props
//----------------------------------
export interface Props {
  className?: string
  children: React.ReactNode
}

//----------------------------------
// component
//----------------------------------
export const Index = (props: Props) => <Section className={props.className}>{props.children}</Section>
