import React from 'react'
import { Link } from '../Link'
import { NavMenu } from '../../datas/_shared/NavMenuDatas'

//----------------------------------
// props
//----------------------------------
export interface NavProps {
  navMenus: NavMenu[]
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const NavComponent = (props: NavProps) => (
  <nav className={props.className}>
    <ul>
      {props.navMenus.map((navMenu, index) => {
        return (
          <li key={index}>
            <Link href={navMenu.path}>{navMenu.menuname}</Link>
          </li>
        )
      })}
    </ul>
  </nav>
)
