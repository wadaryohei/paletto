import React from 'react'
import { Typography } from '../../../../../components/Typography'
import { Card } from '../../../../../components/Card'
import { ThinkCardType } from '../../../../../datas/_shared/CardDatas'

//----------------------------------
// props
//----------------------------------
export interface ThinkCardProps {
  className?: string
  ThinkCardData: ThinkCardType
}

//----------------------------------
// component
//----------------------------------
export const ThinkCardComponent = (props: ThinkCardProps) => (
  <Card className={props.className}>
    <div className={'cardContentsWrapper'}>
      <Typography component={'p'} variant={'lead'} size={'xl'} colors={'gray'} family={'en'} weight={'bold'} className={'cardNum'}>
        {props.ThinkCardData.num}
      </Typography>
      <Typography component={'p'} variant={'lead'} colors={'gray'} className={'cardCopy'}>
        {props.ThinkCardData.copy}
      </Typography>
      <figure className={'cardImg'}>
        <img src={props.ThinkCardData.imgPathname} alt={props.ThinkCardData.copy} width={200} height={200} />
        <Typography component={'p'} variant={'lead'}>
          {props.ThinkCardData.lead}
        </Typography>
      </figure>
    </div>
  </Card>
)
