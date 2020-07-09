import React from 'react'
import { Head } from '../components/Head'
import { IndexDatas } from '../datas/IndexDatas'

const Index = () => (
  <Head
    title={IndexDatas.title}
    description={IndexDatas.description}
    pathname={IndexDatas.pathname}
  />
)

export default Index
