import React from 'react'
import { Head } from '../components/Head'
import { HeadDatas } from '../datas/IndexDatas'
import { IndexContainer } from '../containers/Index'

//----------------------------------
// component
//----------------------------------
const Index = () => (
  <>
    <Head
      title={HeadDatas.title}
      description={HeadDatas.description}
      pathname={HeadDatas.pathname}
    />
    <IndexContainer />
  </>
)

export default Index
