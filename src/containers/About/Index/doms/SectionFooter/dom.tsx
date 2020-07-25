import React from 'react'
import { Container } from '@material-ui/core'
import { Section } from '../../../../../components/Section'
import { Link } from '../../../../../components/Link'
import { Banner } from '../../../../../components/Banner'
import { Typography } from '../../../../../components/Typography'

//----------------------------------
// props
//----------------------------------
export interface SectionFooterProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const SectionFooterComponent = (props: SectionFooterProps) => (
  <Section className={props.className}>
    <Container maxWidth={'md'}>
      <div className={'aboutLinkWrapper'}>
        <Link href={'/services'} routeMatch={false}>
          <Banner imgPath={'pages/about/about_services_glows.jpg'}>
            <span className={'aboutLinkCopy'}>私達ができること</span>
            <span className={'aboutLinkHeading'}>SERVICES</span>
            <span className={'aboutLinkSubHeading'}>
              あなたの事業をパートナーとしグロースする２つの事業
            </span>
          </Banner>
        </Link>
      </div>

      <div className={'aboutContactWrapper'}>
        <Typography component={'p'} variant={'lead'}>
          <span>感情を揺さぶるデザインでこそ、人の心は動きます。</span>
          <span>
            「Paletto.」では課題の解決という当たり前のその先の、事業やサービスやプロダクトの思いをデザインでカタチにします。
          </span>
          <span>是非私達と一緒に思いをカタチにしませんか？</span>
        </Typography>
        <Link href={'/contact'} routeMatch={false}>
          Contact
        </Link>
      </div>
    </Container>
  </Section>
)
