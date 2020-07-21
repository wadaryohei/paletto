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
      pathName={HeadDatas.pathName}
    />
    <MembersContainer />
  </>
)

export default Members
