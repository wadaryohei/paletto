import React from 'react'
import { PagesLayout } from '../../../components/_shared/PagesLayout'
import { PageDatas } from '../../../datas/_shared/PageDatas'
import { Wrapper } from '../../../components/Wrapper'
import { SectionHeader } from '../doms/SectionHeader'

//----------------------------------
// props
//----------------------------------
export interface ThanksProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
const ThanksContainer = (props: ThanksProps) => {
  //----------------------------------
  // render
  //----------------------------------
  return (
    <PagesLayout className={props.className} pathname={PageDatas.thanks.pathname} pageHeading={PageDatas.thanks.pageHeading}>
      <Wrapper>
        {/** @section Header */}
        <SectionHeader className={'l-thanks-header'} />
      </Wrapper>
    </PagesLayout>
  )
}

export default ThanksContainer
