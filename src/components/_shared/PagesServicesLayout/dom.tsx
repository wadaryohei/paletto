import React from 'react'
import { Container } from '@material-ui/core'
import { Header } from '../../Header'
import { Footer } from '../../Footer'
import { Typography } from '../../Typography'
import { Section } from '../../Section'
import { Up } from '../../InViewMonitor'

//----------------------------------
// props
//----------------------------------
export interface PagesServicesLayoutProps {
  pageHeading: string
  pageSubHeading: string
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
  <Section className={props.className}>
    <Header />
    <Container>
      <div className={'pageHeaderWrapper'}>
        <Up>
          <Typography component={'h2'} variant={'heading'}>
            {props.pageHeading}
          </Typography>
        </Up>
        <Up delay={200}>
          <Typography component={'h3'} variant={'subheading'}>
            {props.pageSubHeading}
          </Typography>
        </Up>
      </div>
    </Container>
    <figure
      className={'pageHeaderBg'}
      style={{ backgroundImage: `url(${props.pageHeaderBgPathname})` }}
    ></figure>
    <main>{props.children}</main>
    <Footer />
  </Section>
)
