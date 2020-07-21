import React from 'react'
import { PagesLayout } from '../../components/_shared/PagesLayout'
import { PageDatas } from '../../datas/_shared/PageDatas'

//----------------------------------
// props
//----------------------------------
export interface MembersProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
const MembersContainer = (props: MembersProps) => {
  //----------------------------------
  // render
  //----------------------------------
  return (
    <PagesLayout
      className={props.className}
      pageHeaderBgPathname={PageDatas.members.pageHeaderBgPathname}
    >
      <h1>Members Page</h1>
    </PagesLayout>
  )
}

export default MembersContainer
