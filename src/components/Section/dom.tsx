import React from 'react'
import { BoxProps } from '@material-ui/core'

//----------------------------------
// props
//----------------------------------
export interface SectionProps extends BoxProps {
  children: React.ReactNode
}

//----------------------------------
// component
//----------------------------------
export const SectionComponent = (props: SectionProps) => {
  // MuiのBoxPropsを継承したSectionコンポーネントを返す
  const { ...rest } = props
  return <section {...rest}>{props.children}</section>
}
