import React from 'react'
import { Head } from '../components/Head'
import { HeadDatas } from '../datas/IndexDatas'
import { ServicesContainer } from '../containers/Serivices'

//----------------------------------
// component
//----------------------------------
const Services = () => (
  <>
    <Head
      title={HeadDatas.title}
      description={HeadDatas.description}
      pathName={HeadDatas.pathName}
    />
    <ServicesContainer />
  </>
)

export default Services
