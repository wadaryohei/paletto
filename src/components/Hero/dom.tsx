import React from 'react'
import { Typography } from '../Typography'
import { Up } from '../InViewMonitor'
import { HeroCavas } from './Canves'

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
    <div className={'heroCanvasWrapper'}>
      <div className={'heroCanvasInArea'}>
        <HeroCavas width={120} height={24} top={30} right={10} />
        <HeroCavas width={180} height={80} top={16} left={5} />
        <HeroCavas width={140} height={16} bottom={30} left={28} />
        <HeroCavas width={80} height={20} top={50} left={80} />
        <HeroCavas width={60} height={32} bottom={50} left={10} />
      </div>
    </div>
    <div className={'heroWrapper'}>
      <div className={'hero'}>
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
        <div className={'heroDescWrapper'}>
          {props.descs.map((desc: string, index: number) => {
            return (
              <Up key={index}>
                <Typography component={'p'} variant={'lead'} className="desc">
                  {desc}
                </Typography>
              </Up>
            )
          })}
        </div>
      </div>
    </div>
  </div>
)
