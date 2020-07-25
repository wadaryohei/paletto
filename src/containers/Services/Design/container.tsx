import React from 'react'
import { PagesServicesLayout } from '../../../components/_shared/PagesServicesLayout'
import { SectionWrapper } from './doms/SectionWrapper'
import { SectionIntro } from './doms/SectionIntro'
import { SectionPartner } from './doms/SectionPartner'
import { SectionSolution } from './doms/SectionSolution'
import { SectionDetails } from './doms/SectionDetails'
import { SectionBanner } from './doms/SectionBanner'
import { ServicesDesignDatas } from '../../../datas/ServicesDatas'

//----------------------------------
// props
//----------------------------------
export interface ServicesDesignProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
const ServicesDesignContainer = (props: ServicesDesignProps) => {
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
        <SectionBanner className={'l-section-banner'} />
      </SectionWrapper>
    </PagesServicesLayout>
  )
}

export default ServicesDesignContainer
