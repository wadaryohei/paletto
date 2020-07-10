/**
 * DOM
 */
import React from 'react'
import Link from 'next/link'
import { NavMenu } from '../../datas/IndexDatas'
import { Box } from '@material-ui/core'

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
  <Box display={'block'} className={props.className}>
    <ul>
      {props.navMenus.map((navMenu, index) => {
        return (
          <li key={index}>
            <Link href={navMenu.pathName}>{navMenu.menuName}</Link>
          </li>
        )
      })}
    </ul>
  </Box>
)
