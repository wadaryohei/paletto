import React from 'react'
import { Header } from '../../Header'
import { Footer } from '../../Footer'
import { Container } from '@material-ui/core'

//----------------------------------
// props
//----------------------------------
export interface PagesServicesLayoutProps {
  pageHeading: string
  pageHeaderBgPathname: string
  className?: string
  children: React.ReactNode
}

//----------------------------------
// component
//----------------------------------
export const PagesServicesLayoutComponent = (
  props: PagesServicesLayoutProps,
) => (
  <section className={props.className}>
    <Header />
    <div className={'pageHeaderBgWrapper'}>
      <figure
        className={'pageHeaderBg'}
        style={{ backgroundImage: `url(${props.pageHeaderBgPathname})` }}
      ></figure>
      <Container>
        <div className={'pageHeaderWrapper'}>
          <p className={'pageHeader'}>{props.pageHeading}</p>
        </div>
      </Container>
    </div>
    <main>{props.children}</main>
    <Footer />
  </section>
)
