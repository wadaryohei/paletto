import React from 'react'
import { Card } from '@/components/elements/card'
import { Typography } from '@/components/elements/typography'
import { ServicesCardType } from '@/datas/CardDatas'

//----------------------------------
// props
//----------------------------------
export interface Props {
  className?: string
  ServicesCardData: ServicesCardType
}

//----------------------------------
// component
//----------------------------------
export const Index = (props: Props) => (
  <Card className={props.className}>
    <div className={'cardHeadingWrapper'} style={{ backgroundImage: `url(${props.ServicesCardData.imgPathname})` }}></div>

    <div className={'cardContentsWrapper'}>
      <div className={'cardContentsInner'}>
        <Typography
          component={'p'}
          variant={'subheading'}
          colors={'primary'}
          size={'lg'}
          weight={'bold'}
          family={'en'}
          className={'cardCopyEn'}
        >
          {props.ServicesCardData.copyEn}
        </Typography>
        <Typography component={'p'} variant={'lead'} colors={'gray'} weight={'bold'} size={'xs'} className={'cardCopyJp'}>
          {props.ServicesCardData.copyJp}
        </Typography>
        <Typography component={'p'} variant={'lead'} size={'xs'} className={'cardLead'}>
          {props.ServicesCardData.lead}
        </Typography>
      </div>
    </div>
  </Card>
)
