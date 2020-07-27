import React from 'react'
import { Head } from '../components/Head'
import { HeadDatas } from '../datas/IndexDatas'
import { ThanksContainer } from '../containers/Thanks/Index'

//----------------------------------
// component
//----------------------------------
const Thanks = () => (
  <>
    <Head
      title={HeadDatas.title}
      description={HeadDatas.description}
      pathname={HeadDatas.pathname}
    />
    <ThanksContainer />
  </>
)

export default Thanks
