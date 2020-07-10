import React from 'react'
import { Hero } from '../../components/Hero'
import { Header } from '../../components/Header'
import { HeroDatas } from '../../datas/IndexDatas'
import { Box } from '@material-ui/core'
import { Text } from '../../components/Text'

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
  <Box className={props.className}>
    <Header className={'header'} />
    <Hero
      imgPath={HeroDatas.imgPath}
      copyEn={HeroDatas.copyEn}
      copyEnHighlight={HeroDatas.copyEnHighlight}
      copyJp={HeroDatas.copyJp}
    />
    <Text component={'h1'} textStyle={'heading'}>
      VISION
    </Text>
  </Box>
)

export default IndexContainer
