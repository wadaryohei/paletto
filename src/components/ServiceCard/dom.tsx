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
  <Box className={`${props.className}`}>
    <Box
      className={'cardHeadingWrapper'}
      style={{ backgroundImage: `url(${props.ServicesData.bgPathName})` }}
    >
      <Box className={'cardHeadingInner'}>
        <p className={'cardNum'}>{props.ServicesData.num}</p>
        <p className={'cardTitle cardTitleEn'}>{props.ServicesData.titleEn}</p>
        <p className={'cardTitle cardTitleJp'}>{props.ServicesData.titleJp}</p>
      </Box>
    </Box>

    <Box className={'cardContentsWrapper'}>
      <h1 className={'cardCopy'}>{props.ServicesData.copy}</h1>
      <p className={'cardLead'}>{props.ServicesData.lead}</p>
    </Box>
  </Box>
)
