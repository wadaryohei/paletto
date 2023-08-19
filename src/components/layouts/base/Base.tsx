import React from 'react'
import { Header } from '@/components/layouts/header'
import { Footer } from '@/components/layouts/footer'
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
export const Index = (props: Props) => (
  <Section className={props.className}>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </Section>
)
