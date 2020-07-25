import React from 'react'
import { Head } from '../../components/Head'
import { HeadDatas } from '../../datas/IndexDatas'
import { ServicesPartnerContainer } from '../../containers/Services/Partner/'

//----------------------------------
// component
//----------------------------------
const Partner = () => (
  <>
    <Head
      title={HeadDatas.title}
      description={HeadDatas.description}
      pathname={HeadDatas.pathname}
    />
    <ServicesPartnerContainer />
  </>
)

export default Partner
