import React from 'react'
import { Typography } from '@/components/elements/typography'
import { Up } from '@/components/elements/inviewmonitor'
import { Parallax } from 'react-scroll-parallax'

//----------------------------------
// props
//----------------------------------
export interface Props {
  imgPath: string
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const Index = (props: Props) => (
  <div className={props.className}>
    <div className={'heroWrapper'}>
      <div className={'hero'}>
        <Up delay={300}>
          <div className={'heroImageWrapper'}>
            <div className={'heroImageInner'}>
              <Parallax y={[40, -10]} tagOuter="figure">
                <div className={'heroImage'} style={{ backgroundImage: `url(${props.imgPath})` }} />
              </Parallax>
            </div>
          </div>
        </Up>

        <div className={'heroContentWrapper'}>
          <Parallax y={[30, -40]} tagOuter="figure">
            <div className={'heroCopyWrapper'}>
              <Up>
                <Typography component={'p'} variant="copy" size={'xxl'} weight={'thin'} colors={'black'} className={'heroCopy top'}>
                  Design To Moves
                </Typography>
              </Up>
              <Up delay={100}>
                <Typography component={'p'} variant="copy" family={'en'} weight={'bold'} className={'heroCopy bottom'}>
                  Emotion.
                </Typography>
              </Up>
            </div>
          </Parallax>

          <Parallax y={[30, -100]} tagOuter="figure">
            <Up delay={150}>
              <div className={'heroDescWrapper'}>
                <Typography component={'p'} variant={'lead'} size={'xs'} weight={'light'} colors={'black'} className={'heroDesc'}>
                  テクノロジーとデザインで、
                </Typography>
                <Typography component={'p'} variant={'lead'} size={'xs'} weight={'light'} colors={'black'} className={'heroDesc'}>
                  課題解決のその先の「感情を動かす」チームです
                </Typography>
              </div>
            </Up>
          </Parallax>
        </div>
      </div>
    </div>
  </div>
)
