import React from 'react'
import styled from 'styled-components'
import { Head } from '@/components/layouts/head'
import { BaseLayout } from '@/components/layouts/base'
import { Hero } from '@/components/elements/hero'
import * as Content from '@/features/content/components/Index'
import { BreakPoints, max } from '@/constants/BreakPoints'
import { Padding } from '@/constants/Padding'
import { Colors } from '@/constants/Colors'
import { Margin } from '@/constants/Margin'
import { HeadDatas } from '@/datas/HeadDatas'

//--------------------------------------
// style
//--------------------------------------
export const IndexStyle = styled.div`
  position: relative;

  /**
   * 各レイアウトのスタイル
   */
  .l-vision {
    @media ${max(BreakPoints.md)} {
      padding-bottom: 0;
    }
  }

  .l-approach {
    position: relative;
    background-color: ${Colors.black};
    width: 100%;
    padding: ${Padding.p112} 0;

    @media ${max(BreakPoints.md)} {
      padding: ${Padding.p112} 0;
    }
  }

  .l-service {
    padding-top: ${Margin.m160};
    background-color: ${Colors.white};
  }

  .l-think {
    background-color: ${Colors.black};
    padding: ${Padding.p160} 0;
  }
`

//----------------------------------
// component
//----------------------------------
const Index = () => {
  //----------------------------------
  // render
  //----------------------------------
  return (
    <IndexStyle>
      <Head title={HeadDatas.top.title} description={HeadDatas.top.description} pathname={HeadDatas.top.pathname} />
      <BaseLayout>
        {/** @section Hero */}
        <Hero imgPath={'/top/hero.jpg'} />

        {/** @section Vision */}
        <Content.ContentVision className={'l-vision'} imgPath={'/top/vision/vision.jpg'} />

        {/** @section Approach */}
        <Content.ContentApproach className={'l-approach'} />

        {/** @section Service */}
        <Content.ContentService className={'l-service'} />

        {/** @section Think */}
        <Content.ContentThink className={'l-think'} />
      </BaseLayout>
    </IndexStyle>
  )
}

export default Index
