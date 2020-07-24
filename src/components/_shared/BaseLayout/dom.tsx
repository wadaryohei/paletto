import React from 'react'
import { Header } from '../../Header'
import { Footer } from '../../Footer'
import { Section } from '../../Section'

//----------------------------------
// props
//----------------------------------
export interface BaseLayoutProps {
  className?: string
  children: React.ReactNode
}

//----------------------------------
// component
//----------------------------------
export const BaseLayoutComponent = (props: BaseLayoutProps) => (
  <Section className={props.className}>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </Section>
)
