import React from 'react'
import { Head } from '../components/Head'
import { HeadDatas } from '../datas/IndexDatas'

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
    <h1>Members Page</h1>
  </>
)

export default Members
