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
      pageName={PageDatas.contact.pathname}
      pageHeaderBgPathname={PageDatas.contact.pageHeaderBgPathname}
    >
    </PagesLayout>
  )
}

export default ContactContainer
