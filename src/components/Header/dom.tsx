import React from 'react'
import { Container } from '@material-ui/core'
import { Nav } from '../Nav'
import { Typography } from '../Typography'
import { Link } from '../Link'
import { usePathClassName } from '../../hooks/usePathClassName'
import { useRouter } from 'next/router'
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
  const router = useRouter()
  const pathClassName = usePathClassName(router.pathname)

  //----------------------------------
  // render
  //----------------------------------
  return (
    <header
      className={`${props.className} ${pathClassName.activePathClassName()}`}
    >
      <Container>
        <div className={'headerWrapper'}>
          <div className={'headerLogo'}>
            <Typography component={'h1'}>
              <Link href={'/'} routeMatch={false}>
                Paletto.
              </Link>
            </Typography>
          </div>
          <Nav
            navMenus={NavMenuDatas}
            pathClassName={pathClassName.activePathClassName()}
          />
        </div>
      </Container>
    </header>
  )
}
