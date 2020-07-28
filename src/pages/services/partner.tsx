import React from 'react'
import { Head } from '../../components/Head'
import { HeadDatas } from '../../datas/_shared/HeadDatas'
import { ServicesPartnerContainer } from '../../containers/Services/Partner/'

//----------------------------------
// component
//----------------------------------
const Partner = () => (
  <>
    <Head
      title={HeadDatas.servicesPartner.title}
      description={HeadDatas.servicesPartner.description}
      pathname={HeadDatas.servicesPartner.pathname}
    />
    <ServicesPartnerContainer />
  </>
)

export default Partner
