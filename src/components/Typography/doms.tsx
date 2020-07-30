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
  className?: string
  children: React.ReactNode
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span' | 'figcaption'
  variant: 'heading' | 'subheading' | 'copy' | 'lead' | 'figcaption'
  colors?: 'primary' | 'gray' | 'white' | 'black'
  family?: 'en' | 'jp'
  weight?: 'thin' | 'light' | 'normal' | 'bold'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
  align?: 'center' | 'right' | 'left'
}

//----------------------------------
// component
//----------------------------------
export const TypographyComponent = (props: TypographyProps) => (
  <Typo
    component={props.component}
    align={props.align}
    className={`${props.className} ${props.variant} ${
      props.colors ? props.colors : ''
    } ${props.weight ? props.weight : ''} ${props.size ? props.size : ''} ${
      props.family ? props.family : ''
    }
    `}
  >
    <span>{props.children}</span>
  </Typo>
)
