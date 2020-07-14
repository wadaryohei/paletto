import React from 'react'
import { HeroDatas } from '../../datas/IndexDatas'
import { Box } from '@material-ui/core'
import { Hero } from '../../components/Hero'
import { Header } from '../../components/Header'
import {
  SectionVision,
  SectionWhyEmotionalBg,
  SectionWhyEmotional,
  SectionService,
  SectionPartnerShip,
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
        copyEnFirst={HeroDatas.copyEnFirst}
        copyEnSecond={HeroDatas.copyEnSecond}
        copyJp={HeroDatas.copyJp}
      />

      <main>
        {/** @section Vision */}
        <SectionVision />

        {/** @section Why Emotional Bg */}
        <SectionWhyEmotionalBg />

        {/** @section Why Emotional */}
        <SectionWhyEmotional />

        {/** @section Service */}
        <SectionService />

        {/** @section PartnerShip */}
        <SectionPartnerShip />
      </main>
    </Box>
  </>
)

export default IndexContainer
