import React from 'react'
import { Box } from '@material-ui/core'
import { Services } from '../../datas/IndexDatas'

//----------------------------------
// props
//----------------------------------
export interface CardProps {
  className?: string
  ServicesData: Services
}

//----------------------------------
// component
//----------------------------------
export const CardComponent = (props: CardProps) => (
  <Box
    className={`${props.className}`}
    style={{ backgroundImage: `url(${props.ServicesData.bgPathName})` }}
  >
    <p className={'cardNum'}>{props.ServicesData.num}</p>
    <p className={'cardTitle'}>{props.ServicesData.title}</p>
    <h1 className={'cardCopy'}>{props.ServicesData.copy}</h1>
    <p className={'cardLead'}>{props.ServicesData.lead}</p>
  </Box>
)
