import React from 'react'
import { Head } from '../components/Head'
import { HeadDatas } from '../datas/IndexDatas'
import { IndexContainer } from '../container/Index'

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
