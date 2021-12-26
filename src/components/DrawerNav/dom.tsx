import React from 'react'
import { SwipeableDrawer } from '@material-ui/core'
import { Link } from '../Link'
import { Logo } from '../Logo'
import { MenuIcon } from '../Icon/Menu'
import { NavMenuType } from '../../datas/_shared/NavMenuDatas'

//----------------------------------
// props
//----------------------------------
export interface DrawerNavComponentProps {
  className?: string
  navMenus: NavMenuType[]
  isOpen: boolean
  onOpenMenu: () => void
  onCloseMenu: () => void
}

//----------------------------------
// component
//----------------------------------
export const DrawerNavComponent = (props: DrawerNavComponentProps) => (
  <SwipeableDrawer anchor={'right'} className={props.className} open={props.isOpen} onOpen={props.onOpenMenu} onClose={props.onCloseMenu}>
    <nav className={'drawerNav'}>
      <div className={'drawerNavHeaderWrapper'}>
        <Link href={'/'} routeMatch={false}>
          <Logo />
        </Link>

        <MenuIcon icon={'close'} callback={props.onCloseMenu} className={'close'} />
      </div>
      <ul>
        {props.navMenus.map((navMenu: NavMenuType, index: number) => {
          return (
            <li key={index}>
              <Link href={navMenu.path} routeMatch={false}>
                {navMenu.menuname}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  </SwipeableDrawer>
)
