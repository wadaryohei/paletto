import React from 'react'
import { Typography } from '@material-ui/core'

//----------------------------------
// props
//----------------------------------
/**
 * Typographyコンポーネントをラップできなくなったらしいのでinterfaceを独自に作る
 * @see https://github.com/mui-org/material-ui/issues/19512
 */
export interface TextProps {
  className?: string
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span'
  align?: 'center' | 'right' | 'left'
  textStyle: 'heading' | 'subheading' | 'accentheading' | 'copy' | 'lead'
  children: React.ReactNode
}

//----------------------------------
// component
//----------------------------------
export const TextComponent = (props: TextProps) => (
  <Typography
    component={props.component}
    align={props.align}
    className={`${props.className} ${props.textStyle}`}
  >
    {props.children}
  </Typography>
)
