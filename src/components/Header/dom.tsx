import React from 'react'
import Link from 'next/link'
import { Box, Typography } from '@material-ui/core'
import { Nav } from '../Nav'
import { NavMenuDatas } from '../../datas/IndexDatas'

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
    <Box className={'logo'}>
      <Typography component={'h1'}>
        <Link href={'/'}>Palette</Link>
      </Typography>
    </Box>
    <Nav navMenus={NavMenuDatas} />
  </header>
)
