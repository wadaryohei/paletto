import React from 'react'
import { Head } from '../components/Head'
import { Hero } from '../components/Hero'
import { Nav } from '../components/Nav'
import { HeadDatas, HeroDatas, NavMenuDatas } from '../datas/IndexDatas'

const Index = () => (
  <>
    <Head
      title={HeadDatas.title}
      description={HeadDatas.description}
      pathName={HeadDatas.pathName}
    />
    <Hero
      imgPath={HeroDatas.imgPath}
      copyEn={HeroDatas.copyEn}
      copyEnHighlight={HeroDatas.copyEnHighlight}
      copyJp={HeroDatas.copyJp}
    >
      <Nav navMenus={NavMenuDatas} />
    </Hero>
  </>
)

export default Index
