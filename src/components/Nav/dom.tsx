import React from 'react'
import Link from 'next/link'
import { NavMenu } from '../../datas/_shared/NavMenuDatas'

//----------------------------------
// props
//----------------------------------
export interface NavProps {
  navMenus: NavMenu[]
  pathClassName?: string
  className?: string
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
            <Link href={{ pathname: navMenu.path }}>
              <a>{navMenu.menuname}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  </nav>
)
