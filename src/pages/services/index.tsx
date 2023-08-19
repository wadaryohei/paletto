import React from 'react'
import styled from 'styled-components'
import { Head } from '@/components/layouts/head'
import { Main } from '@/components/layouts/main'
import { Section } from '@/components/layouts/section'
import { PagesLayout } from '@/components/layouts/pages'
import * as Content from '@/features/content/components/Index'
import { Padding } from '@/constants/Padding'
import { Colors } from '@/constants/Colors'
import { BreakPoints, max } from '@/constants/BreakPoints'
import { HeadDatas } from '@/datas/HeadDatas'
import { PageDatas } from '@/datas/PageDatas'

//--------------------------------------
// style
//--------------------------------------
export const ServicesStyle = styled.div`
  .l-services-intro {
    padding: ${Padding.p160} 0 0;
    background-color: ${Colors.white};

    @media ${max(BreakPoints.md)} {
      padding: 0;
    }
  }

  .l-services {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    background-color: ${Colors.white};
  }
`

//----------------------------------
// component
//----------------------------------
const Services = () => (
  <ServicesStyle>
    <Head title={HeadDatas.services.title} description={HeadDatas.services.description} pathname={HeadDatas.services.pathname} />
    <PagesLayout
      pathname={PageDatas.services.pathname}
      pageHeaderBgPathname={PageDatas.services.pageHeaderBgPathname}
      pageHeading={PageDatas.services.pageHeading}
    >
      <Section>
        <Main>
          {/** @section Intro */}
          <Content.ContentIntro className={'l-services-intro'} />

          {/** @section Services */}
          <Content.ContentService className={'l-services'} />
        </Main>
      </Section>
    </PagesLayout>
  </ServicesStyle>
)

export default Services
