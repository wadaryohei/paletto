import React from 'react'
import { Typography } from '../Typography'
import { Up } from '../InViewMonitor'
import { HeroCavas } from './Canves'
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
    {/* <div className={'heroCanvasWrapper'}>
      <div className={'heroCanvasInArea'}>
        <Parallax className="parallaxWrapper" y={[0, -100]} tagOuter="figure">
          <HeroCavas width={120} height={24} top={30} right={10} />
        </Parallax>

        <Parallax className="parallaxWrapper" y={[0, -100]} tagOuter="figure">
          <HeroCavas width={180} height={80} top={16} left={5} />
        </Parallax>

        <Parallax className="parallaxWrapper" y={[0, -100]} tagOuter="figure">
          <HeroCavas width={140} height={16} bottom={30} left={28} />
        </Parallax>
        <HeroCavas width={80} height={20} top={50} left={80} />
        <HeroCavas width={60} height={32} bottom={50} left={10} />
      </div>
    </div> */}

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
