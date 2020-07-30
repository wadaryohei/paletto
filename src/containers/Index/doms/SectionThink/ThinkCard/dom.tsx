import React from 'react'
import { Think } from '../../../../../datas/IndexDatas'
import { Typography } from '../../../../../components/Typography'
import { Card } from '../../../../../components/Card'

//----------------------------------
// props
//----------------------------------
export interface ThinkCardProps {
  className?: string
  ThinkData: Think
}

//----------------------------------
// component
//----------------------------------
export const ThinkCardComponent = (props: ThinkCardProps) => (
  <Card className={props.className}>
    <div className={'cardContentsWrapper'}>
      <Typography
        component={'p'}
        variant={'lead'}
        size={'xl'}
        colors={'gray'}
        family={'en'}
        weight={'bold'}
        className={'cardNum'}
      >
        {props.ThinkData.num}
      </Typography>
      <Typography
        component={'p'}
        variant={'lead'}
        colors={'gray'}
        className={'cardCopy'}
      >
        {props.ThinkData.copy}
      </Typography>
      <figure className={'cardImg'}>
        <img
          src={props.ThinkData.imgPathname}
          alt={props.ThinkData.copy}
          width={200}
          height={200}
        />
        <Typography component={'p'} variant={'lead'}>
          {props.ThinkData.lead}
        </Typography>
      </figure>
    </div>
  </Card>
)
