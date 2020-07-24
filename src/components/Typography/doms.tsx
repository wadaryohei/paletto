import React from 'react'
import { Typography as Typo } from '@material-ui/core'

//----------------------------------
// props
//----------------------------------
/**
 * Typographyコンポーネントをラップできなくなったらしいのでinterfaceを独自に作る
 * @see https://github.com/mui-org/material-ui/issues/19512
 */
export interface TypographyProps {
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span' | 'figcaption'
  align?: 'center' | 'right' | 'left'
  variant?: 'heading' | 'subheading' | 'copy' | 'lead' | 'figcaption'
  className?: string
  children: React.ReactNode
}

//----------------------------------
// component
//----------------------------------
export const TypographyComponent = (props: TypographyProps) => (
  <Typo
    component={props.component}
    align={props.align}
    className={`${props.className} ${props.variant}`}
  >
    <span>{props.children}</span>
  </Typo>
)
