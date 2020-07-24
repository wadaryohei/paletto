import React from 'react'
import { Head } from '../components/Head'
import { HeadDatas } from '../datas/IndexDatas'
import { ContactContainer } from '../containers/Contact'

//----------------------------------
// component
//----------------------------------
const Contact = () => (
  <>
    <Head
      title={HeadDatas.title}
      description={HeadDatas.description}
      pathname={HeadDatas.pathname}
    />
    <ContactContainer />
  </>
)

export default Contact
