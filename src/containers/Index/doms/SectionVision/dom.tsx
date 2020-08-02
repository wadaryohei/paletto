import React from 'react'
import { Container } from '@material-ui/core'
import { Section } from '../../../../components/Section'
import { Typography } from '../../../../components/Typography'
import { LinkButton } from '../../../../components/Button'
import { More } from '../../../../components/More'
import { Up } from '../../../../components/InViewMonitor'

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
        <Up>
          <Typography component={'h1'} variant={'heading'} colors={'white'}>
            OUR VISION.
          </Typography>
        </Up>

        <Up>
          <Typography component={'p'} variant={'subheading'} colors={'white'}>
            私達のビジョン
          </Typography>
        </Up>

        <div className={'visionLeadWrapper'}>
          <Up>
            <Typography component={'p'} variant={'copy'} colors={'white'}>
              感情を動かすデザインを
            </Typography>
          </Up>

          <div className={'visionLeadInWrapper'}>
            <Up>
              <Typography component={'p'} variant={'lead'} colors={'white'}>
                <span>人の感情に寄り添い、人の感情をデザインする。</span>
                <span>
                  そんな「エモーショナルなデザイン」をすることが私達「Paletto.」のVisionです。
                </span>
              </Typography>
              <Typography component={'p'} variant={'lead'} colors={'white'}>
                <span>感情を揺さぶるデザインでこそ、人の心は動きます。</span>
                <span>
                  「Paletto.」では課題の解決の先の「事業やサービスやプロダクト」の思いをデザインでカタチにします。
                </span>
              </Typography>
            </Up>
          </div>
        </div>

        <Up>
          <div className={'visionButtonWrapper'}>
            <LinkButton href={'/about'} color={'primary'} size={'md'}>
              <More>View More</More>
            </LinkButton>
          </div>
        </Up>
      </Container>
    </div>
  </Section>
)
