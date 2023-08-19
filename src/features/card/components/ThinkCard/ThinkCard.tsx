import React from 'react'
import { Typography } from '@/components/elements/typography'
import { Card } from '@/components/elements/card'
import { ThinkCardType } from '@/datas/CardDatas'

//----------------------------------
// props
//----------------------------------
export interface Props {
  className?: string
  ThinkCardData: ThinkCardType
}

//----------------------------------
// component
//----------------------------------
export const Index = (props: Props) => (
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
