import React from 'react'
import { Container } from '@material-ui/core'
import { MenuIcon } from '../Icon/Menu'
import { Typography } from '../Typography'
import { Nav } from '../Nav'
import { Link } from '../Link'
import { Logo } from '../Logo'
import { DrawerNav } from '../DrawerNav'
import { useShowMenu } from '../../hooks/useShowMenu'
import { NavMenuDatas } from '../../datas/_shared/NavMenuDatas'

//----------------------------------
// props
//----------------------------------
export interface HeaderProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const HeaderComponent = (props: HeaderProps) => {
  //----------------------------------
  // hooks
  //----------------------------------
  const callback = useShowMenu()

  //----------------------------------
  // render
  //----------------------------------
  return (
    <header className={props.className}>
      <Container>
        <div className={'headerWrapper'}>
          <div className={'headerLogo'}>
            <Typography component={'h1'}>
              <Link href={'/'} routeMatch={false}>
                <Logo />
              </Link>
            </Typography>
          </div>
          <MenuIcon
            icon={'menu'}
            callback={callback.onOpen}
            className={'headerNavIcon'}
          />
          <Nav navMenus={NavMenuDatas} className={'headerNav'} />
          <DrawerNav
            navMenus={NavMenuDatas}
            isOpen={callback.isOpen}
            onOpenMenu={callback.onOpen}
            onCloseMenu={callback.onClose}
          />
        </div>
      </Container>
    </header>
  )
}
