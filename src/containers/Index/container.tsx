import React from 'react'
import { HeroDatas } from '../../datas/IndexDatas'
import { Box } from '@material-ui/core'
import { Hero } from '../../components/Hero'
import { Header } from '../../components/Header'
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
      <Header className={'header'} />
      <Hero
        imgPath={HeroDatas.imgPath}
        siteName={HeroDatas.siteName}
        copyEn={HeroDatas.copyEn}
        copyJp={HeroDatas.copyJp}
      />

      <main>
        {/** @section Vision */}
        <SectionVision />

        {/** @section Announce */}
        <SectionAnnounce />

        {/** @section Service */}
        <SectionService />

        {/** @section Plans */}
        <SectionPlans />
      </main>
    </Box>
  </>
)

export default IndexContainer
