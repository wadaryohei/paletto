import React from 'react'
import IndexContainer from '../container/Index/IndexContainer'
import { Head } from '../components/Head'
import { HeadDatas } from '../datas/IndexDatas'

//----------------------------------
// component
//----------------------------------
const Index = () => (
  <>
    <Head
      title={HeadDatas.title}
      description={HeadDatas.description}
      pathName={HeadDatas.pathName}
    />
    <IndexContainer />
  </>
)

export default Index
