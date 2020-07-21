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
    <Header />
    <div className={'pageHeaderBgWrapper'}>
      <div
        className={'pageHeaderBg'}
        style={{ backgroundImage: `url(${props.pageHeaderBgPathname})` }}
      ></div>
      <Container>
        <div className={'pageHeaderWrapper'}>
          <p className={'pageHeader'}>{props.pageName}</p>
        </div>
      </Container>
    </div>
    <main>{props.children}</main>
    <Footer />
  </section>
)
