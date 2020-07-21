import React from 'react'
import { Header } from '../../Header'
import { Footer } from '../../Footer'

//----------------------------------
// props
//----------------------------------
export interface PagesLayoutProps {
  className?: string
  children: React.ReactNode
  pageHeaderBgPathname: string
}

//----------------------------------
// component
//----------------------------------
export const PagesLayoutComponent = (props: PagesLayoutProps) => (
  <div
    className={props.className}
    style={{ backgroundImage: `${props.pageHeaderBgPathname}` }}
  >
    <Header />
    <main>{props.children}</main>
    <Footer />
  </div>
)
