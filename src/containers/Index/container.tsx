import React from 'react'
import { HeroDatas } from '../../datas/IndexDatas'
import { Box } from '@material-ui/core'
import { Hero } from '../../components/Hero'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import {
  SectionVision,
  SectionAnnounce,
  SectionService,
  SectionPlans,
} from './index'

//----------------------------------
// props
//----------------------------------
export interface IndexProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
const IndexContainer = (props: IndexProps) => (
  <>
    <Box className={props.className}>
      <Header />
      <Hero
        imgPath={HeroDatas.imgPath}
        siteName={HeroDatas.siteName}
        copyEn={HeroDatas.copyEn}
        copyJp={HeroDatas.copyJp}
      />

      <main>
        {/** @section Vision */}
        <SectionVision className={'l-vision'} />

        {/** @section Announce */}
        <SectionAnnounce className={'l-announce'} />

        {/** @section Service */}
        <SectionService className={'l-service'} />

        {/** @section Plans */}
        <SectionPlans className={'l-plans'} />
      </main>

      <Footer />
    </Box>
  </>
)

export default IndexContainer
