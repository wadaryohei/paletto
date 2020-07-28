import React from 'react'
import { Head } from '../components/Head'
import { HeadDatas } from '../datas/_shared/HeadDatas'
import { ContactContainer } from '../containers/Contact/Index'

//----------------------------------
// component
//----------------------------------
const Contact = () => (
  <>
    <Head
      title={HeadDatas.contact.title}
      description={HeadDatas.contact.description}
      pathname={HeadDatas.contact.pathname}
    />
    <ContactContainer />
  </>
)

export default Contact
