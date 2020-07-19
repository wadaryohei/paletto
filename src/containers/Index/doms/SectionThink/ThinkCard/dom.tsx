import React from 'react'
import { Think } from '../../../../../datas/IndexDatas'
import { Text } from '../../../../../components/Text'
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
      <p className={'cardTitle'}>{props.ThinkData.copy}</p>
      <figure className={'cardImg'}>
        <img
          src={props.ThinkData.imgPathName}
          alt={props.ThinkData.copy}
          width={200}
          height={200}
        />
        <Text
          component={'figcaption'}
          textStyle={'lead'}
          className={'cardLead'}
        >
          {props.ThinkData.lead}
        </Text>
      </figure>
    </div>
  </Card>
)
