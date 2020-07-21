import React from 'react'
import { Header } from '../../Header'
import { Footer } from '../../Footer'
import { Container } from '@material-ui/core'

//----------------------------------
// props
//----------------------------------
export interface PagesLayoutProps {
  className?: string
  children: React.ReactNode
  pageName: string
  pageHeaderBgPathname: string
}

//----------------------------------
// component
//----------------------------------
export const PagesLayoutComponent = (props: PagesLayoutProps) => (
  <section className={props.className}>
    <div
      className={'pageHeaderWrapper'}
      style={{ backgroundImage: `url(${props.pageHeaderBgPathname})` }}
    >
      <Container>
        <p className={'pageHeader'}>{props.pageName}</p>
      </Container>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  </section>
)
