import React from 'react'
import { PagesServicesLayout } from '../../../components/_shared/PagesServicesLayout'
import { SectionWrapper } from '../_shared/SectionWrapper'
import { SectionBanner } from '../_shared/SectionBanner'
import { SectionIntro } from './doms/SectionIntro'
import { SectionPartner } from './doms/SectionPartner'
import { SectionSolution } from './doms/SectionSolution'
import { SectionDetails } from './doms/SectionDetails'
import { ServicesDesignDatas } from '../../../datas/ServicesDatas'

//----------------------------------
// props
//----------------------------------
export interface ServicesPartnerProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
const ServicesPartnerContainer = (props: ServicesPartnerProps) => {
  //----------------------------------
  // render
  //----------------------------------
  return (
    <PagesServicesLayout
      className={props.className}
      pageHeaderBgPathname={ServicesDesignDatas.bgPathName}
      pageHeading={ServicesDesignDatas.heading}
      pageSubHeading={ServicesDesignDatas.subHeading}
    >
      <SectionWrapper>
        {/** @section Intro */}
        <SectionIntro className={'l-section-intro'} />

        {/** @section Partner */}
        <SectionPartner className={'l-section-partner'} />

        {/** @section Partner */}
        <SectionSolution className={'l-section-solution'} />

        {/** @section Details */}
        <SectionDetails className={'l-section-solution'} />

        {/** @section Banner */}
        {/* <SectionBanner
          className={'l-section-banner'}
          href={'/services/development'}
          imgPath={'/pages/services/development.jpg'}
          bannerCopy={'制作パートナー事業へ'}
          bannerHeading={'Development PartnerShips'}
        /> */}
      </SectionWrapper>
    </PagesServicesLayout>
  )
}

export default ServicesPartnerContainer
