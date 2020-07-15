import React from 'react'

//----------------------------------
// props
//----------------------------------
export interface SectionProps {
  className?: string
  children: React.ReactNode
}

//----------------------------------
// component
//----------------------------------
export const SectionComponent = (props: SectionProps) => (
  <section className={props.className}>{props.children}</section>
)
