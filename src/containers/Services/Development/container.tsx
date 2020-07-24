import React from 'react'
import { PagesServicesLayout } from '../../../components/_shared/PagesServicesLayout'
import { PageDatas } from '../../../datas/_shared/PageDatas'
import { Section } from '../../../components/Section'

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
      pageHeaderBgPathname={PageDatas.services.pageHeaderBgPathname}
      pageHeading={PageDatas.services.pageHeading}
    >
      {/** @section ServicesIntro */}
      <Section className={'l-services'}>aaaaa</Section>
    </PagesServicesLayout>
  )
}

export default ServicesDevelopmentContainer
