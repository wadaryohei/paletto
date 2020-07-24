import React from 'react'
import { Head } from '../../components/Head'
import { HeadDatas } from '../../datas/IndexDatas'
import { ServicesDevelopmentContainer } from '../../containers/Services/Development'

//----------------------------------
// component
//----------------------------------
const Development = () => (
  <>
    <Head
      title={HeadDatas.title}
      description={HeadDatas.description}
      pathname={HeadDatas.pathname}
    />
    <ServicesDevelopmentContainer />
  </>
)

export default Development
