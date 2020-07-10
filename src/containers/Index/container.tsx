import React from 'react'
import { HeroDatas } from '../../datas/IndexDatas'
import { Box } from '@material-ui/core'
import { Hero } from '../../components/Hero'
import { Header } from '../../components/Header'
import { Text } from '../../components/Text'
import { Section } from '../../components/Section'

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
    <Section className={'vision'}>
      <Text component={'h2'} textStyle={'heading'} align={'center'}>
        Vision
      </Text>
      <Text component={'p'} textStyle={'copy'} align={'center'}>
        世界にエモーショナルなデザインを
      </Text>
      <Text component={'p'} textStyle={'lead'} align={'center'}>
        人の感情に寄り添い、人の感情をデザインする。
      </Text>
      <Text component={'p'} textStyle={'lead'} align={'center'}>
        そんな「エモーショナルなデザイン」をすることが私達のVisionです。
      </Text>
    </Section>
  </Box>
)

export default IndexContainer
