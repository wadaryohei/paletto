import React from 'react'
import { Header } from '../../Header'
import { Footer } from '../../Footer'

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
  <div className={props.className}>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </div>
)
