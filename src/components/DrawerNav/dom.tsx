import React from 'react'
import { SwipeableDrawer } from '@material-ui/core'
import { Link } from '../Link'
import { MenuIcon } from '../Icon/Menu'
import { NavMenu } from '../../datas/_shared/NavMenuDatas'
import { IconProps } from '../Icon/Menu/dom'

//----------------------------------
// props
//----------------------------------
export interface DrawerNavComponentProps extends IconProps {
  className?: string
  navMenus: NavMenu[]
  isOpen: boolean
  onOpenMenu: () => void
  onCloseMenu: () => void
}

//----------------------------------
// component
//----------------------------------
export const DrawerNavComponent = (props: DrawerNavComponentProps) => (
  <SwipeableDrawer
    anchor={'right'}
    className={props.className}
    open={props.isOpen}
    onOpen={props.onOpenMenu}
    onClose={props.onCloseMenu}
  >
    <nav className={'drawerNav'}>
      <ul>
        {props.navMenus.map((navMenu: NavMenu, index: number) => {
          return (
            <li key={index}>
              <Link href={navMenu.path} routeMatch={false}>
                {navMenu.menuname}
              </Link>
            </li>
          )
        })}
      </ul>
      <MenuIcon
        icon={props.icon}
        callback={props.onCloseMenu}
        className={props.icon}
      />
    </nav>
  </SwipeableDrawer>
)
