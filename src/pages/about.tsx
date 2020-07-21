import React from 'react'
import { Head } from '../components/Head'
import { HeadDatas } from '../datas/IndexDatas'
import { AboutContainer } from '../containers/About'

//----------------------------------
// component
//----------------------------------
const About = () => (
  <>
    <Head
      title={HeadDatas.title}
      description={HeadDatas.description}
      pathName={HeadDatas.pathName}
    />
    <AboutContainer />
  </>
)

export default About
