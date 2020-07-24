import React from 'react'
import { Card } from '../../../../../components/Card'
import { Typography } from '../../../../../components/Typography'
import { Services } from '../../../../../datas/_shared/ServicesDatas'

//----------------------------------
// props
//----------------------------------
export interface ServiceCardProps {
  className?: string
  ServicesData: Services
}

//----------------------------------
// component
//----------------------------------
export const ServiceCardComponent = (props: ServiceCardProps) => (
  <Card className={props.className}>
    <div
      className={'cardHeadingWrapper'}
      style={{ backgroundImage: `url(${props.ServicesData.imgPathname})` }}
    ></div>

    <div className={'cardContentsWrapper'}>
      <div className={'cardContentsInner'}>
        <Typography component={'p'} className={'cardCopyEn'}>
          {props.ServicesData.copyEn}
        </Typography>
        <Typography component={'p'} className={'cardCopyJp'}>
          {props.ServicesData.copyJp}
        </Typography>
        <Typography component={'p'} variant={'lead'} className={'cardLead'}>
          {props.ServicesData.lead}
        </Typography>
      </div>
    </div>
  </Card>
)
