import React from 'react'
import { HeroDatas } from '../../datas/IndexDatas'
import { Hero } from '../../components/Hero'
import { SectionVision } from './doms/SectionVision'
import { SectionAnnounce } from './doms/SectionAnnounce'
import { SectionService } from './doms/SectionService'
import { SectionPlans } from './doms/SectionPlans'
import { BaseLayout } from '../../components/_shared/BaseLayout'

//----------------------------------
// props
//----------------------------------
export interface IndexProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
const IndexContainer = (props: IndexProps) => (
  <BaseLayout className={props.className}>
    {/** @section Hero */}
    <Hero
      imgPath={HeroDatas.imgPath}
      siteName={HeroDatas.siteName}
      copyEn={HeroDatas.copyEn}
      copyJp={HeroDatas.copyJp}
    />
    {/** @section Vision */}
    <SectionVision className={'l-vision'} />

    {/** @section Announce */}
    <SectionAnnounce className={'l-announce'} />

    {/** @section Service */}
    <SectionService className={'l-service'} />

    {/** @section Plans */}
    <SectionPlans className={'l-plans'} />
  </BaseLayout>
)

export default IndexContainer
