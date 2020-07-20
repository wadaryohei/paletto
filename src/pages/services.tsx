import React from 'react'
import { Head } from '../components/Head'
import { HeadDatas } from '../datas/IndexDatas'

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
    <h1>Services Page</h1>
  </>
)

export default Services
