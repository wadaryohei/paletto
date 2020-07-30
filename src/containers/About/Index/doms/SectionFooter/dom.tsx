import React from 'react'
import { Container } from '@material-ui/core'
import { Section } from '../../../../../components/Section'
import { Link } from '../../../../../components/Link'
import { Banner } from '../../../../../components/Banner'
import { Typography } from '../../../../../components/Typography'
import { Up } from '../../../../../components/InViewMonitor'

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
      <Up>
        <div className={'aboutLinkWrapper'}>
          <Link href={'/services'} routeMatch={false}>
            <Banner imgPath={'pages/about/about_services_glows.jpg'}>
              <Typography
                component={'p'}
                variant={'subheading'}
                weight={'bold'}
                colors={'black'}
                className={'aboutLinkCopy'}
              >
                私達ができること
              </Typography>
              <Typography
                component={'p'}
                variant={'heading'}
                size={'xl'}
                colors={'black'}
                weight={'bold'}
                family={'en'}
                className={'aboutLinkHeading'}
              >
                SERVICES
              </Typography>
            </Banner>
          </Link>
        </div>
      </Up>

      <div className={'aboutContactWrapper'}>
        <Up>
          <Typography component={'p'} variant={'lead'} size={'xs'}>
            <span>感情を揺さぶるデザインでこそ、人の心は動きます。</span>
            <span>
              「Paletto.」では課題の解決という当たり前のその先の、事業やサービスやプロダクトの思いをデザインでカタチにします。
            </span>
            <span>是非私達と一緒に思いをカタチにしませんか？</span>
          </Typography>
        </Up>
        <Up>
          <Link href={'/contact'} routeMatch={false}>
            Contact
          </Link>
        </Up>
      </div>
    </Container>
  </Section>
)
