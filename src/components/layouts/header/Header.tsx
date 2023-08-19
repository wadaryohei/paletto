import React from 'react'
import { Container } from '@material-ui/core'
import { MenuIcon } from '@/components/elements/icon/menu'
import { Nav } from '@/components/elements/nav'
import { Link } from '@/components/elements/link'
import { Logo } from '@/components/elements/logo'
import { Typography } from '@/components/elements/typography'
import { DrawerNav } from '@/components/elements/drawernav'
import { useShowMenu } from '@/hooks/useShowMenu'
import { NavMenuDatas } from '@/datas/NavMenuDatas'

//----------------------------------
// props
//----------------------------------
export interface Props {
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const Index = (props: Props) => {
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
            <Typography component={'h1'} variant={'heading'}>
              <Link href={'/'} routeMatch={false}>
                <Logo />
              </Link>
            </Typography>
          </div>
          <MenuIcon icon={'menu'} callback={callback.onOpen} className={'headerNavIcon'} />
          <Nav navMenus={NavMenuDatas} className={'headerNav'} />
          <DrawerNav navMenus={NavMenuDatas} isOpen={callback.isOpen} onOpenMenu={callback.onOpen} onCloseMenu={callback.onClose} />
        </div>
      </Container>
    </header>
  )
}
