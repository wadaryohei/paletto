import React from 'react'
import { SwipeableDrawer } from '@material-ui/core'
import { Link } from '@/components/elements/link'
import { Logo } from '@/components/elements/logo'
import { MenuIcon } from '@/components/elements/icon/menu'
import { NavMenuType } from '@/datas/NavMenuDatas'

//----------------------------------
// props
//----------------------------------
export interface Props {
  className?: string
  navMenus: NavMenuType[]
  isOpen: boolean
  onOpenMenu: () => void
  onCloseMenu: () => void
}

//----------------------------------
// component
//----------------------------------
export const Index = (props: Props) => (
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
