import React from 'react'
import { Head } from '../components/Head'
import { HeadDatas } from '../datas/_shared/HeadDatas'
import { IndexContainer } from '../containers/Index'

//----------------------------------
// component
//----------------------------------
const Index = () => (
  <>
    <Head
      title={HeadDatas.top.title}
      description={HeadDatas.top.description}
      pathname={HeadDatas.top.pathname}
    />
    <IndexContainer />
  </>
)

export default Index
