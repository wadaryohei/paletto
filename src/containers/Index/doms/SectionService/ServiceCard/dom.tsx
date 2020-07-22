import React from 'react'
import { Services } from '../../../../../datas/IndexDatas'
import { Text } from '../../../../../components/Text'
import { Card } from '../../../../../components/Card'
import { More } from '../../../../../components/More'

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
      style={{ backgroundImage: `url(${props.ServicesData.bgPathName})` }}
    ></div>

    <div className={'cardContentsWrapper'}>
      <div className={'cardContentsInner'}>
        <p className={'cardNum'}>{props.ServicesData.num}</p>
        <p className={'cardTitle'}>{props.ServicesData.titleEn}</p>
        <p className={'cardTitle'}>{props.ServicesData.titleJp}</p>
        <Text component={'p'} textStyle={'lead'} className={'cardLead'}>
          {props.ServicesData.lead}
        </Text>
      </div>

      <div className={'cardViewMore'}>
        <More pathname={'/'} />
      </div>
    </div>
  </Card>
)
