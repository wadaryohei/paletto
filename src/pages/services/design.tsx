import React from 'react'
import { Head } from '../../components/Head'
import { HeadDatas } from '../../datas/IndexDatas'
import { ServicesDesignContainer } from '../../containers/Services/Design'

//----------------------------------
// component
//----------------------------------
const Design = () => (
  <>
    <Head
      title={HeadDatas.title}
      description={HeadDatas.description}
      pathName={HeadDatas.pathName}
    />
    <ServicesDesignContainer />
  </>
)

export default Design
