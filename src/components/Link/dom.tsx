import React from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

//----------------------------------
// props
//----------------------------------
export interface LinkComponentProps extends LinkProps {
  target?: boolean
  routeMatch?: boolean
  className?: string
  children: React.ReactNode
}

//----------------------------------
// component
//----------------------------------
export const LinkComponent = (props: LinkComponentProps) => {
  //----------------------------------
  // hooks
  //----------------------------------
  const router = useRouter()

  return (
    <div className={props.className}>
      {/** ターゲット指定がある場合 */}
      {props.target === true && (
        <Link href={props.href}>
          {props.target === true && <a target="_blank">{props.children}</a>}
        </Link>
      )}

      {/** ルートマッチしない場合 */}
      {props.routeMatch === false && (
        <Link href={props.href}>
          {props.routeMatch === false && <a>{props.children}</a>}
        </Link>
      )}

      {/** いずれにもはまらない場合はルートマッチする場合 */}
      {props.target !== true && props.routeMatch !== false && (
        <Link href={`${router.pathname}${props.href}`}>
          <a>{props.children}</a>
        </Link>
      )}
    </div>
  )
}
