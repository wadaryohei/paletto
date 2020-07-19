import React from 'react'
import Link from 'next/link'
import { Typography } from '@material-ui/core'
import { Nav } from '../Nav'
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
export const HeaderComponent = (props: HeaderProps) => (
  <header className={props.className}>
    <div className={'headerInner'}>
      <div className={'logo'}>
        <Typography component={'h1'}>
          <Link href={{ pathname: '/' }}>
            <a>Paletto.</a>
          </Link>
        </Typography>
      </div>
      <Nav navMenus={NavMenuDatas} />
    </div>
  </header>
)
