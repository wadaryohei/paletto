import React from 'react'
import { Link } from '@/components/elements/link'
import { NavMenuType } from '@/datas/NavMenuDatas'

//----------------------------------
// props
//----------------------------------
export interface Props {
  navMenus: NavMenuType[]
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const Index = (props: Props) => (
  <nav className={props.className}>
    <ul>
      {props.navMenus.map((navMenu: NavMenuType, index: number) => {
        return (
          <li key={index}>
            <Link routeMatch={false} href={navMenu.path}>
              {navMenu.menuname}
            </Link>
          </li>
        )
      })}
    </ul>
  </nav>
)
