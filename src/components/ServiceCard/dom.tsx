import React from 'react'
import { Services } from '../../datas/IndexDatas'
import { Box } from '@material-ui/core'

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
