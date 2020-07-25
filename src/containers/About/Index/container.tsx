import React from 'react'
import { PagesLayout } from '../../../components/_shared/PagesLayout'
import { PageDatas } from '../../../datas/_shared/PageDatas'
import { SectionMain } from './doms/SectionMain'
import { SectionFooter } from './doms/SectionFooter'

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
      pathname={PageDatas.about.pathname}
      pageHeaderBgPathname={PageDatas.about.pageHeaderBgPathname}
      pageHeading={PageDatas.about.pageHeading}
    >
      <div className={'l-about'}>
        {/** @section Main */}
        <SectionMain className={'l-about-main'} />

        {/** @section Footer */}
        <SectionFooter className={'l-about-footer'} />
      </div>
    </PagesLayout>
  )
}

export default AboutContainer
