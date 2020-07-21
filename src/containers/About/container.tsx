import React from 'react'
import { PagesLayout } from '../../components/_shared/PagesLayout'
import { PageDatas } from '../../datas/_shared/PageDatas'

//----------------------------------
// props
//----------------------------------
export interface AboutProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
const AboutContainer = (props: AboutProps) => {
  //----------------------------------
  // render
  //----------------------------------
  return (
    <PagesLayout
      className={props.className}
      pageHeaderBgPathname={PageDatas.about.pageHeaderBgPathname}
    >
      <h1>About Page</h1>
    </PagesLayout>
  )
}

export default AboutContainer
