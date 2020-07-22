import React from 'react'
import { Header } from '../../Header'
import { Footer } from '../../Footer'
import { Container } from '@material-ui/core'

//----------------------------------
// props
//----------------------------------
export interface PagesLayoutProps {
  pathname: string
  pageHeaderBgPathname: string
  pageHeading: string
  className?: string
  children: React.ReactNode
}

//----------------------------------
// component
//----------------------------------
export const PagesLayoutComponent = (props: PagesLayoutProps) => (
  <section className={props.className}>
    <Header />
    <div className={'pageHeaderBgWrapper'}>
      <figure
        className={'pageHeaderBg'}
        style={{ backgroundImage: `url(${props.pageHeaderBgPathname})` }}
      ></figure>
      <Container>
        <div className={'pageHeaderWrapper'}>
          <p className={'pagename'}>{props.pathname}</p>
          <p className={'pageHeader'}>{props.pageHeading}</p>
        </div>
      </Container>
    </div>
    <main>{props.children}</main>
    <Footer />
  </section>
)
