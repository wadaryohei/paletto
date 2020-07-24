import React from 'react'
import { Head } from '../components/Head'
import { ServicesContainer } from '../containers/Services'
import { HeadDatas } from '../datas/IndexDatas'

//----------------------------------
// component
//----------------------------------
const Services = () => (
  <>
    <Head
      title={HeadDatas.title}
      description={HeadDatas.description}
      pathname={HeadDatas.pathname}
    />
    <ServicesContainer />
  </>
)

export default Services
