import React from 'react'
import { Container } from '@material-ui/core'
import { Header } from '@/components/layouts/header'
import { Footer } from '@/components/layouts/footer'
import { Section } from '@/components/layouts/section'
import { Typography } from '@/components/elements/typography'
import { Up } from '@/components/elements/inviewmonitor'

//----------------------------------
// props
//----------------------------------
export interface Props {
  pageHeading: string
  pageSubHeading: string
  pageHeaderBgPathname: string
  className?: string
  children: React.ReactNode
}

//----------------------------------
// component
//----------------------------------
export const Index = (props: Props) => (
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
    <Up>
      <figure className={'pageHeaderBg'} style={{ backgroundImage: `url(${props.pageHeaderBgPathname})` }}></figure>
    </Up>
    <main>{props.children}</main>
    <Footer />
  </Section>
)
