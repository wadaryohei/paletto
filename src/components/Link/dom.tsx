import React from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

//----------------------------------
// props
//----------------------------------
export interface LinkComponentProps extends LinkProps {
  className?: string
  href: string
  children: React.ReactNode
  target?: boolean
  routeMatch?: boolean
}

//----------------------------------
// component
//----------------------------------
export const LinkComponent = (props: LinkComponentProps) => {
  //----------------------------------
  // hooks
  //----------------------------------
  const router = useRouter()

  // Targetの指定がある場合
  if (props.target === true) {
    return (
      <div className={props.className}>
        <Link href={{ pathname: props.href }}>
          <a target="_blank">{props.children}</a>
        </Link>
      </div>
    )
  }

  // RouteMatchがFalseの場合
  if (props.routeMatch === false) {
    return (
      <div className={props.className}>
        <Link href={{ pathname: props.href }}>
          <a>{props.children}</a>
        </Link>
      </div>
    )
  }

  return (
    <div className={props.className}>
      <Link href={{ pathname: `${router.pathname}${props.href}` }}>
        <a>{props.children}</a>
      </Link>
    </div>
  )
}
