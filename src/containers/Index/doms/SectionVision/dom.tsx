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
  imgPath: string
}

//----------------------------------
// component
//----------------------------------
export const SectionVisionComponent = (props: SectionVisionProps) => (
  <Section className={props.className}>
    <div className={'visionWrapper'}>
      <figure>
        <div style={{ backgroundImage: `url(${props.imgPath})` }}></div>
      </figure>
      <Container>
        <Text component={'h2'} textStyle={'heading'} className={'visionText'}>
          {SectionHeadingDatas.SectionVision.heading}
        </Text>
        <Text component={'p'} textStyle={'subheading'} className={'visionText'}>
          {SectionHeadingDatas.SectionVision.subHeading}
        </Text>

        <div className={'visionLeadWrapper'}>
          <Text component={'p'} textStyle={'copy'} className={'visionText'}>
            {SectionHeadingDatas.SectionVision.copy}
          </Text>
          <Text component={'p'} textStyle={'lead'} className={'visionText'}>
            <span>人の感情に寄り添い、人の感情をデザインする。</span>
            <span>
              そんな「エモーショナルなデザイン」をすることが私達「Paletto.」のVisionです。
            </span>
            <span>感情を揺さぶるデザインでこそ、人の心は動きます。</span>
            <span>
              「Paletto.」では課題の解決のその先の、事業やサービスやプロダクトのの思いをデザインでカタチにします。
            </span>
          </Text>
        </div>
      </Container>
    </div>
  </Section>
)
