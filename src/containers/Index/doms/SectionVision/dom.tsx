import React from 'react'
import { Container } from '@material-ui/core'
import { Section } from '../../../../components/Section'
import { Text } from '../../../../components/Text'
import { SectionHeadingDatas } from '../../../../datas/IndexDatas'

//----------------------------------
// props
//----------------------------------
export interface SectionVisionProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const SectionVisionComponent = (props: SectionVisionProps) => (
  <Section className={props.className}>
    <Container maxWidth={'md'}>
      <Text component={'h2'} textStyle={'heading'}>
        {SectionHeadingDatas.SectionVision.headingEn}
      </Text>
      <Text component={'p'} textStyle={'copy'}>
        {SectionHeadingDatas.SectionVision.headingJp}
      </Text>

      <div className={'visionLeadWrapper'}>
        <Text component={'p'} textStyle={'lead'}>
          <span>人の感情に寄り添い、人の感情をデザインする。</span>
          <span>
            そんな「エモーショナルなデザイン」をすることが私達のVisionです。
          </span>
          <span>感情を揺さぶるデザインでこそ、人の心は動きます。</span>
          <span>
            「Paletto.」では課題の解決だけでなく、事業やサービスやプロダクトの思いをデザインでカタチにします。
          </span>
        </Text>
      </div>
    </Container>
  </Section>
)
