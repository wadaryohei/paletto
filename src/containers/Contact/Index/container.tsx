import React from 'react'
import { PagesLayout } from '../../../components/_shared/PagesLayout'
import { PageDatas } from '../../../datas/_shared/PageDatas'

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
      pathname={PageDatas.contact.pathname}
      pageHeaderBgPathname={PageDatas.contact.pageHeaderBgPathname}
      pageHeading={PageDatas.contact.pageHeading}
    >
    </PagesLayout>
  )
}

export default ContactContainer
