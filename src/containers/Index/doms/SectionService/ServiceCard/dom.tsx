import React from 'react'
import { Card } from '../../../../../components/Card'
import { Typography } from '../../../../../components/Typography'
import { ServicesCardType } from '../../../../../datas/_shared/CardDatas'

//----------------------------------
// props
//----------------------------------
export interface ServiceCardProps {
  className?: string
  ServicesCardData: ServicesCardType
}

//----------------------------------
// component
//----------------------------------
export const ServiceCardComponent = (props: ServiceCardProps) => (
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
