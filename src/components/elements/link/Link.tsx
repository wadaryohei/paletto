import React from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

//----------------------------------
// props
//----------------------------------
export interface Props extends LinkProps {
  target?: boolean
  routeMatch?: boolean
  className?: string
  children: React.ReactNode
}

//----------------------------------
// component
//----------------------------------
export const Index = (props: Props) => {
  //----------------------------------
  // hooks
  //----------------------------------
  const router = useRouter()

  return (
    <div className={props.className}>
      {/** ターゲット指定がある場合 */}
      {props.target === true && (
        <Link href={props.href}>
          <a target="_blank">{props.children}</a>
        </Link>
      )}

      {/** ルートマッチしない場合 */}
      {props.routeMatch === false && (
        <Link scroll={false} href={props.href}>
          <a
            onClick={() =>
              router.push(props.href).then(() => {
                setTimeout(() => {
                  window.scroll(0, 0)
                }, 300)
              })
            }
          >
            {props.children}
          </a>
        </Link>
      )}

      {/** いずれにもはまらない場合はルートマッチする場合 */}
      {props.target !== true && props.routeMatch !== false && (
        <Link scroll={false} href={`${router.pathname}${props.href}`}>
          <a
            onClick={() =>
              router.push(props.href).then(() => {
                setTimeout(() => {
                  window.scroll(0, 0)
                }, 300)
              })
            }
          >
            {props.children}
          </a>
        </Link>
      )}
    </div>
  )
}
