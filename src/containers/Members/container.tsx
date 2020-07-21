import React from 'react'
import { PagesLayout } from '../../components/_shared/PagesLayout'

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
    <PagesLayout className={props.className}>
      <h1>Members Page</h1>
    </PagesLayout>
  )
}

export default MembersContainer
