import React from 'react'
import { Head } from '../components/Head'
import { HeadDatas } from '../datas/_shared/HeadDatas'
import { ThanksContainer } from '../containers/Thanks/Index'

//----------------------------------
// component
//----------------------------------
const Thanks = () => (
  <>
    <Head
      title={HeadDatas.thanks.title}
      description={HeadDatas.thanks.description}
      pathname={HeadDatas.thanks.pathname}
    />
    <ThanksContainer />
  </>
)

export default Thanks
