import React from 'react'
import InViewMonitor from 'react-inview-monitor'
import { FadeInUp, FadeInDown, FadeInLeft, FadeInRight } from '@/components/elements/inviewmonitor/InViewMonitorstyle'

//----------------------------------
// props
//----------------------------------
export interface Props {
  children: React.ReactNode
  delay?: number
}

//----------------------------------
// component
//----------------------------------
export const Up = (props: Props) => (
  <InViewMonitor classNameInView={'fadeInUp'} childPropsInView={{ isActive: true }} intoViewMargin={'-20%'}>
    <FadeInUp isActive={false} delay={props.delay}>
      {props.children}
    </FadeInUp>
  </InViewMonitor>
)

export const Down = (props: Props) => (
  <InViewMonitor classNameInView={'fadeInDown'} childPropsInView={{ isActive: true }} intoViewMargin={'-20%'}>
    <FadeInDown isActive={false} delay={props.delay}>
      {props.children}
    </FadeInDown>
  </InViewMonitor>
)

export const Left = (props: Props) => (
  <InViewMonitor classNameInView={'fadeInLeft'} childPropsInView={{ isActive: true }} intoViewMargin={'-20%'}>
    <FadeInLeft isActive={false} delay={props.delay}>
      {props.children}
    </FadeInLeft>
  </InViewMonitor>
)

export const Right = (props: Props) => (
  <InViewMonitor classNameInView={'fadeInRight'} childPropsInView={{ isActive: true }} intoViewMargin={'-20%'}>
    <FadeInRight isActive={false} delay={props.delay}>
      {props.children}
    </FadeInRight>
  </InViewMonitor>
)
