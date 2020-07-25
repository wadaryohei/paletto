import React from 'react'
import { PagesServicesLayout } from '../../../components/_shared/PagesServicesLayout'
import { SectionWrapper } from '../_shared/SectionWrapper'
import { SectionBanner } from '../_shared/SectionBanner'
import { SectionIntro } from './doms/SectionIntro'
import { SectionPartner } from './doms/SectionPartner'
import { SectionSolution } from './doms/SectionSolution'
import { SectionDetails } from './doms/SectionDetails'
import { ServicesDevelopmentDatas } from '../../../datas//ServicesDatas'

//----------------------------------
// props
//----------------------------------
export interface ServicesDevelopmentProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
const ServicesDevelopmentContainer = (props: ServicesDevelopmentProps) => {
  //----------------------------------
  // render
  //----------------------------------
  return (
    <PagesServicesLayout
      className={props.className}
      pageHeaderBgPathname={ServicesDevelopmentDatas.bgPathName}
      pageHeading={ServicesDevelopmentDatas.heading}
      pageSubHeading={ServicesDevelopmentDatas.subHeading}
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
        <SectionBanner
          className={'l-section-banner'}
          href={'/services/design'}
          imgPath={'/pages/services/design.jpg'}
          bannerCopy={'デザインパートナー事業へ'}
          bannerHeading={'Design PartnerShips'}
        />
      </SectionWrapper>
    </PagesServicesLayout>
  )
}

export default ServicesDevelopmentContainer
