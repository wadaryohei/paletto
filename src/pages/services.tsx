import React from 'react'
import { Head } from '../components/Head'
import { HeadDatas } from '../datas/_shared/HeadDatas'
import { ServicesContainer } from '../containers/Services/Index'

//----------------------------------
// component
//----------------------------------
const Services = () => (
  <>
    <Head title={HeadDatas.services.title} description={HeadDatas.services.description} pathname={HeadDatas.services.pathname} />
    <ServicesContainer />
  </>
)

export default Services
