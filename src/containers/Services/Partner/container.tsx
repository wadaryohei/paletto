import React from 'react'
import { PagesServicesLayout } from '../../../components/_shared/PagesServicesLayout'
import { Wrapper } from '../../../components/Wrapper'
import { SectionIntro } from './doms/SectionIntro'
import { SectionPartner } from './doms/SectionPartner'
import { SectionSolution } from './doms/SectionSolution'
import { SectionDetails } from './doms/SectionDetails'
import { SectionSubscription } from './doms/SectionSubscription'

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
      pageHeaderBgPathname={'/top/services/cardbg_01.jpg'}
      pageHeading={'Design/Development partnerShips'}
      pageSubHeading={'デザイン/開発パートナー事業'}
    >
      <Wrapper>
        {/** @section Intro */}
        <SectionIntro className={'l-section-intro'} />

        {/** @section Partner */}
        <SectionPartner className={'l-section-partner'} />

        {/** @section Partner */}
        <SectionSolution className={'l-section-solution'} />

        {/** @section Details */}
        <SectionDetails className={'l-section-solution'} />

        {/** @section Subscription */}
        <SectionSubscription className={'l-section-subscription'} />
      </Wrapper>
    </PagesServicesLayout>
  )
}

export default ServicesPartnerContainer
