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
                  className={'heroCopy top'}
                  component={'p'}
                  variant="copy"
                >
                  Design To Moves
                </Typography>
              </Up>
              <Up delay={100}>
                <Typography
                  className={'heroCopy bottom'}
                  component={'p'}
                  variant="copy"
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
                      className="desc"
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
