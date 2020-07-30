import React from 'react'
import { Container } from '@material-ui/core'
import { Header } from '../../Header'
import { Footer } from '../../Footer'
import { Section } from '../../Section'
import { Up } from '../../InViewMonitor'
import { Typography } from '../../Typography'

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
            <Typography
              component={'p'}
              variant={'heading'}
              size={'xxl'}
              weight={'bold'}
              colors={'black'}
              family={'en'}
              className={'pagename'}
            >
              {props.pathname}
            </Typography>
          </Up>
          <Up delay={200}>
            <Typography
              component={'p'}
              variant={'heading'}
              size={'lg'}
              weight={'bold'}
              colors={'black'}
              family={'en'}
              className={'pageHeader'}
            >
              {props.pageHeading}
            </Typography>
          </Up>
        </div>
      </Container>
    </div>
    <main>{props.children}</main>
    <Footer />
  </Section>
)
