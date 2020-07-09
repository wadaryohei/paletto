import React from 'react'
import { Head } from '../components/Head'
import { Hero } from '../components/Hero'
import { IndexDatas } from '../datas/IndexDatas'

const Index = () => (
  <>
    <Head
      title={IndexDatas.title}
      description={IndexDatas.description}
      pathname={IndexDatas.pathname}
    />
    <Hero
      imgPath={''}
      copyEn={'Design That Moves'}
      copyEnHighlight={'Emotions'}
      copyJp={'世界にエモーショナルなデザインを。'}
    />
  </>
)

export default Index
