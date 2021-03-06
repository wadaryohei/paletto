import React from 'react'
import { BaseLayout } from '../../components/_shared/BaseLayout'
import { Hero } from '../../components/Hero'
import { SectionVision } from './doms/SectionVision'
import { SectionApproach } from './doms/SectionApproach'
import { SectionService } from './doms/SectionService'
import { SectionThink } from './doms/SectionThink'

//----------------------------------
// props
//----------------------------------
export interface IndexProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
const IndexContainer = (props: IndexProps) => {
  //----------------------------------
  // render
  //----------------------------------
  return (
    <BaseLayout className={props.className}>
      {/** @section Hero */}
      <Hero imgPath={'/top/hero.jpg'} />

      {/** @section Vision */}
      <SectionVision
        className={'l-vision'}
        imgPath={'/top/vision/vision.jpg'}
      />

      {/** @section Approach */}
      <SectionApproach className={'l-approach'} />

      {/** @section Service */}
      <SectionService className={'l-service'} />

      {/** @section Think */}
      <SectionThink className={'l-think'} />
    </BaseLayout>
  )
}

export default IndexContainer
