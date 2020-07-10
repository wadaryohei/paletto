import React from 'react'
import { Hero } from '../../components/Hero'
import { Nav } from '../../components/Nav'
import { HeroDatas, NavMenuDatas } from '../../datas/IndexDatas'

//----------------------------------
// component
//----------------------------------
const IndexContainer = () => (
  <Hero
    imgPath={HeroDatas.imgPath}
    copyEn={HeroDatas.copyEn}
    copyEnHighlight={HeroDatas.copyEnHighlight}
    copyJp={HeroDatas.copyJp}
  >
    <Nav navMenus={NavMenuDatas} />
  </Hero>
)

export default IndexContainer
