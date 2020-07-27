import React from 'react'
import { Container } from '@material-ui/core'
import { Section } from '../../../../components/Section'
import { Typography } from '../../../../components/Typography'
import { SectionHeadingDatas } from '../../../../datas/IndexDatas'
import { LinkButton } from '../../../../components/Button'

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
        <Typography component={'h1'} variant={'heading'}>
          {SectionHeadingDatas.SectionVision.heading}
        </Typography>
        <Typography component={'p'} variant={'subheading'}>
          {SectionHeadingDatas.SectionVision.subHeading}
        </Typography>

        <div className={'visionLeadWrapper'}>
          <Typography component={'p'} variant={'copy'}>
            {SectionHeadingDatas.SectionVision.copy}
          </Typography>
          <Typography component={'p'} variant={'lead'}>
            <span>人の感情に寄り添い、人の感情をデザインする。</span>
            <span>
              そんな「エモーショナルなデザイン」をすることが私達「Paletto.」のVisionです。
            </span>
          </Typography>
          <Typography component={'p'} variant={'lead'}>
            <span>感情を揺さぶるデザインでこそ、人の心は動きます。</span>
            <span>
              「Paletto.」では課題の解決の先の「事業やサービスやプロダクト」の思いをデザインでカタチにします。
            </span>
          </Typography>
        </div>

        <div className={'visionButtonWrapper'}>
          <LinkButton href={'/about'} color={'primary'} size={'md'}>
            View More
          </LinkButton>
        </div>
      </Container>
    </div>
  </Section>
)
