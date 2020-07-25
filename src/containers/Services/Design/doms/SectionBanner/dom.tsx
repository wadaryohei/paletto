import React from 'react'
import { Section } from '../../../../../components/Section'
import { Link } from '../../../../../components/Link'
import { Banner } from '../../../../../components/Banner'

//----------------------------------
// props
//----------------------------------
export interface SectionBannerProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const SectionBannerComponent = (props: SectionBannerProps) => (
  <Section className={props.className}>
    <Link href={'/services/development'} routeMatch={false}>
      <Banner imgPath={'/pages/services/development.jpg'}>
        <span className={'servicesBannerCopy'}>制作パートナー事業へ</span>
        <span className={'servicesBannerHeading'}>SERVICES</span>
      </Banner>
    </Link>
  </Section>
)
