import React from 'react'
import { Section } from '../../../../components/Section'
import { Link } from '../../../../components/Link'
import { Banner } from '../../../../components/Banner'

//----------------------------------
// props
//----------------------------------
export interface SectionBannerProps {
  className?: string
  href: string
  imgPath: string
  bannerCopy: string
  bannerHeading: string
}

//----------------------------------
// component
//----------------------------------
export const SectionBannerComponent = (props: SectionBannerProps) => (
  <Section className={props.className}>
    <Link href={props.href} routeMatch={false}>
      <Banner imgPath={props.imgPath}>
        <span className={'servicesBannerCopy'}>{props.bannerCopy}</span>
        <span className={'servicesBannerHeading'}>{props.bannerHeading}</span>
      </Banner>
    </Link>
  </Section>
)
