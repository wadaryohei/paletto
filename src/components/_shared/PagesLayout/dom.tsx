import React from 'react'
import { Container } from '@material-ui/core'
import { Header } from '../../Header'
import { Footer } from '../../Footer'
import { Section } from '../../Section'
import { Up } from '../../InViewMonitor'

//----------------------------------
// props
//----------------------------------
export interface PagesLayoutProps {
  pathname: string
  pageHeaderBgPathname?: string
  pageHeading: string
  className?: string
  children: React.ReactNode
}

//----------------------------------
// component
//----------------------------------
export const PagesLayoutComponent = (props: PagesLayoutProps) => (
  <Section className={props.className}>
    <Header />
    <div className={'pageHeaderBgWrapper'}>
      {props.pageHeaderBgPathname && (
        <div className={'pageHeaderBgInner'}>
          <Up>
            <figure
              className={'pageHeaderBg'}
              style={{
                backgroundImage: `url(${props.pageHeaderBgPathname})`,
              }}
            ></figure>
          </Up>
        </div>
      )}
      <Container>
        <div className={'pageHeaderWrapper'}>
          <Up>
            <p className={'pagename'}>{props.pathname}</p>
          </Up>
          <Up delay={200}>
            <p className={'pageHeader'}>{props.pageHeading}</p>
          </Up>
        </div>
      </Container>
    </div>
    <main>{props.children}</main>
    <Footer />
  </Section>
)
