import React from 'react'
import Link, { LinkProps } from 'next/link'

//----------------------------------
// props
//----------------------------------
export interface LinkComponentProps extends LinkProps {
  className?: string
  href: string
  children: React.ReactNode
  targetBlank?: boolean
}

//----------------------------------
// component
//----------------------------------
export const LinkComponent = (props: LinkComponentProps) => {
  if (props.targetBlank === true) {
    return (
      <div className={props.className}>
        <Link href={{ pathname: props.href }}>
          <a target="_blank">{props.children}</a>
        </Link>
      </div>
    )
  }

  return (
    <div className={props.className}>
      <Link href={{ pathname: props.href }}>
        <a>{props.children}</a>
      </Link>
    </div>
  )
}
