import React from 'react'
import { PagesLayout } from '../../components/_shared/PagesLayout'
import { PageDatas } from '../../datas/_shared/PageDatas'

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
      pageName={PageDatas.services.pathname}
      pageHeaderBgPathname={PageDatas.services.pageHeaderBgPathname}
    >
    </PagesLayout>
  )
}

export default ServicesContainer
