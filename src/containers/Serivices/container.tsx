import React from 'react'
import { PagesLayout } from '../../components/_shared/PagesLayout'

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
    <PagesLayout className={props.className}>
      <h1>Services Page</h1>
    </PagesLayout>
  )
}

export default ServicesContainer
