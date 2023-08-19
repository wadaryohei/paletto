import React from 'react'
import { Container } from '@material-ui/core'
import { Section } from '@/components/layouts/section'
import { Typography } from '@/components/elements/typography'
import { LinkButton } from '@/components/elements/button'
import { More } from '@/components/elements/more'
import { Up } from '@/components/elements/inviewmonitor'

//----------------------------------
// props
//----------------------------------
export interface Props {
  className?: string
  imgPath: string
}

//----------------------------------
// component
//----------------------------------
export const Index = (props: Props) => (
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
              感情を動かすプロダクトを
            </Typography>
          </Up>

          <div className={'visionLeadInWrapper'}>
            <Up>
              <Typography component={'p'} variant={'lead'} colors={'white'}>
                <span>人の感情に寄り添ったプロダクトをつくる。</span>
                <span>そんな「エモーショナルなプロダクト開発」をすることが私達「Paletto.」のVisionです。</span>
              </Typography>
              <Typography component={'p'} variant={'lead'} colors={'white'}>
                <span>感情を揺さぶるプロダクトでこそ、人の心は動きます。</span>
                <span>「Paletto.」では課題解決のその先の「プロダクト」の思いをデザイン・開発でカタチにします。</span>
              </Typography>
            </Up>
          </div>
        </div>

        <Up>
          <div className={'visionButtonWrapper'}>
            <LinkButton href={'/services'} color={'primary'} size={'md'}>
              <More>View More</More>
            </LinkButton>
          </div>
        </Up>
      </Container>
    </div>
  </Section>
)
