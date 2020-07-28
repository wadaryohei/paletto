import React from 'react'
import { Head } from '../components/Head'
import { HeadDatas } from '../datas/_shared/HeadDatas'
import { MembersContainer } from '../containers/Members/Index'

//----------------------------------
// component
//----------------------------------
const Members = () => (
  <>
    <Head
      title={HeadDatas.members.title}
      description={HeadDatas.members.description}
      pathname={HeadDatas.members.pathname}
    />
    <MembersContainer />
  </>
)

export default Members
