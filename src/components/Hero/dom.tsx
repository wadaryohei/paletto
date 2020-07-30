import React from 'react'
import { Typography } from '../Typography'
import { Up } from '../InViewMonitor'
import { Parallax } from 'react-scroll-parallax'

//----------------------------------
// props
//----------------------------------
export interface HeroProps {
  imgPath: string
  copies: string[]
  descs: string[]
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const HeroComponent = (props: HeroProps) => (
  <div className={props.className}>
    <div className={'heroWrapper'}>
      <div className={'hero'}>
        <Up>
          <div className={'heroImageWrapper'}>
            <div className={'heroImageInner'}>
              <Parallax y={[40, -10]} tagOuter="figure">
                <div className={'heroImage'} />
              </Parallax>
            </div>
          </div>
        </Up>

        <div className={'heroContentWrapper'}>
          <Parallax y={[30, -40]} tagOuter="figure">
            <div className={'heroCopyWrapper'}>
              <Up delay={100}>
                <Typography
                  component={'p'}
                  variant="copy"
                  size={'xxl'}
                  weight={'thin'}
                  colors={'black'}
                  className={'heroCopy top'}
                >
                  Design To Moves
                </Typography>
              </Up>
              <Up delay={100}>
                <Typography
                  component={'p'}
                  variant="copy"
                  family={'en'}
                  weight={'bold'}
                  size={'xxxl'}
                  className={'heroCopy bottom'}
                >
                  Emotion.
                </Typography>
              </Up>
            </div>
          </Parallax>

          <Parallax y={[30, -100]} tagOuter="figure">
            <Up>
              <div className={'heroDescWrapper'}>
                {props.descs.map((desc: string, index: number) => {
                  return (
                    <Typography
                      key={index}
                      component={'p'}
                      variant={'lead'}
                      size={'xs'}
                      weight={'light'}
                      colors={'black'}
                      className={'heroDesc'}
                    >
                      {desc}
                    </Typography>
                  )
                })}
              </div>
            </Up>
          </Parallax>
        </div>
      </div>
    </div>
  </div>
)
