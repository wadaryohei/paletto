import React from 'react'
import { PagesLayout } from '../../components/_shared/PagesLayout'
import { PageDatas } from '../../datas/_shared/PageDatas'

//----------------------------------
// props
//----------------------------------
export interface ContactProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
const ContactContainer = (props: ContactProps) => {
  //----------------------------------
  // render
  //----------------------------------
  return (
    <PagesLayout
      className={props.className}
      pageHeaderBgPathname={PageDatas.contact.pageHeaderBgPathname}
    >
      <h1>Contact Page</h1>
    </PagesLayout>
  )
}

export default ContactContainer
