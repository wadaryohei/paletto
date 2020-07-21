import React from 'react'
import Link from 'next/link'
import { NavMenu } from '../../datas/_shared/NavMenuDatas'

//----------------------------------
// props
//----------------------------------
export interface NavProps {
  navMenus: NavMenu[]
  className?: string
  pathClassName?: string
}

//----------------------------------
// component
//----------------------------------
export const NavComponent = (props: NavProps) => (
  <nav className={`${props.className} ${props.pathClassName}`}>
    <ul>
      {props.navMenus.map((navMenu, index) => {
        return (
          <li key={index}>
            <Link href={{ pathname: navMenu.pathName }}>
              <a>{navMenu.menuName}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  </nav>
)
