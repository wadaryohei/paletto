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
      pageHeaderBgPathname={PageDatas.services.pageHeaderBgPathname}
    >
      <h1>Services Page</h1>
    </PagesLayout>
  )
}

export default ServicesContainer
