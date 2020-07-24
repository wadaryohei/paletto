import React from 'react'
import { PagesLayout } from '../../components/_shared/PagesLayout'
import { PageDatas } from '../../datas/_shared/PageDatas'
import { SectionIntro } from './doms/SectionIntro'
import { SectionServices } from './doms/SectionServices'

//----------------------------------
// props
//----------------------------------
export interface ServicesProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
const ServicesContainer = (props: ServicesProps) => {
  //----------------------------------
  // render
  //----------------------------------
  return (
    <PagesLayout
      className={props.className}
      pathname={PageDatas.services.pathname}
      pageHeaderBgPathname={PageDatas.services.pageHeaderBgPathname}
      pageHeading={PageDatas.services.pageHeading}
    >
      {/** @section ServicesIntro */}
      <SectionIntro className={'l-services-intro'} />

      {/** @section Services */}
      <SectionServices className={'l-services'} />
    </PagesLayout>
  )
}

export default ServicesContainer
