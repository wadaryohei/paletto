import React from 'react'
import { Link } from '../Link'
import { NavMenuType } from '../../datas/_shared/NavMenuDatas'

//----------------------------------
// props
//----------------------------------
export interface NavProps {
  navMenus: NavMenuType[]
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const NavComponent = (props: NavProps) => (
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
