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
      <p className={'cardNum'}>{props.ThinkData.num}</p>
      <p className={'cardCopy'}>{props.ThinkData.copy}</p>
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
