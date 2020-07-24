import React from 'react'
import { Head } from '../components/Head'
import { HeadDatas } from '../datas/IndexDatas'
import { MembersContainer } from '../containers/Members'

//----------------------------------
// component
//----------------------------------
const Members = () => (
  <>
    <Head
      title={HeadDatas.title}
      description={HeadDatas.description}
      pathname={HeadDatas.pathname}
    />
    <MembersContainer />
  </>
)

export default Members
