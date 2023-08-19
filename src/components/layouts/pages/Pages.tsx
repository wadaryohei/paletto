import React from 'react'
import { Container } from '@material-ui/core'
import { Header } from '@/components/layouts/header'
import { Footer } from '@/components/layouts/footer'
import { Section } from '@/components/layouts/section'
import { Up } from '@/components/elements/inviewmonitor'
import { Typography } from '@/components/elements/typography'

//----------------------------------
// props
//----------------------------------
export interface Props {
  pathname: string
  pageHeaderBgPathname?: string
  pageHeading: string
  className?: string
  children: React.ReactNode
}

//----------------------------------
// component
//----------------------------------
export const Index = (props: Props) => (
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
