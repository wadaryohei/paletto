import React from 'react'
import { Head } from '../components/Head'
import { HeadDatas } from '../datas/_shared/HeadDatas'
import { AboutContainer } from '../containers/About/Index'

//----------------------------------
// component
//----------------------------------
const About = () => (
  <>
    <Head title={HeadDatas.about.title} description={HeadDatas.about.description} pathname={HeadDatas.about.pathname} />
    <AboutContainer />
  </>
)

export default About
