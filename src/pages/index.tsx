import React from 'react'
import { Head } from '../components/Head'
import { Hero } from '../components/Hero'
import { Nav } from '../components/Nav'
import { HeroDatas, NavMenuDatas } from '../datas/IndexDatas'

const Index = () => (
  <>
    <Head
      title={HeroDatas.title}
      description={HeroDatas.description}
      pathname={HeroDatas.pathname}
    />
    <Hero
      imgPath={'/hero.png'}
      copyEn={'Design That Moves'}
      copyEnHighlight={'Emotions'}
      copyJp={'世界にエモーショナルなデザインを。'}
    >
      <Nav navMenus={NavMenuDatas} />
    </Hero>
  </>
)

export default Index
