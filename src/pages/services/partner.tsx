import React from 'react'
import styled from 'styled-components'
import { Head } from '@/components/layouts/head'
import { PagesServicesLayout } from '@/components/layouts/service'
import { Wrapper } from '@/components/layouts/wrapper'
import * as Content from '@/features/content/components/Index'
import { Colors } from '@/constants/Colors'
import { Margin } from '@/constants/Margin'
import { HeadDatas } from '@/datas/HeadDatas'

//----------------------------------
// style
//----------------------------------
export const ServicesPartnerStyle = styled.div`
  background-color: ${Colors.smokeGray};

  .l-section-partner {
    margin-top: ${Margin.m160};
  }

  .l-section-solution {
    margin-top: ${Margin.m64};
  }

  .l-section-banner {
    margin-top: ${Margin.m64};
  }

  .l-section-subscription {
    margin-top: ${Margin.m112};
  }
`

//----------------------------------
// component
//----------------------------------
const Partner = () => (
  <ServicesPartnerStyle>
    <Head
      title={HeadDatas.servicesPartner.title}
      description={HeadDatas.servicesPartner.description}
      pathname={HeadDatas.servicesPartner.pathname}
    />
    <PagesServicesLayout
      pageHeaderBgPathname={'/top/services/cardbg_01.jpg'}
      pageHeading={'Design/Development partnerShips'}
      pageSubHeading={'デザイン/開発パートナー事業'}
    >
      <Wrapper>
        {/** @section Headline */}
        <Content.ContentHeadline className={'l-section-headline'} />

        {/** @section Partner */}
        <Content.ContentPartner className={'l-section-partner'} />

        {/** @section Solution */}
        <Content.ContentSolution className={'l-section-solution'} />

        {/** @section Details */}
        <Content.ContentDetails className={'l-section-details'} />

        {/** @section Subscription */}
        <Content.ContentSubscription className={'l-section-subscription'} />
      </Wrapper>
    </PagesServicesLayout>
  </ServicesPartnerStyle>
)

export default Partner
