/**
 * pages/Indexで使用するデータ
 * - コンポーネントに渡す静的なデータを記述する
 */

import { RoutingPath } from '../const/RoutingPath'

// Hero
export interface Hero {
  title: string
  description: string
  pathname: string
}

export const HeroDatas: Hero = {
  title: 'Paletto',
  description: '世界にエモーショナルなデザインを。',
  pathname: RoutingPath.index,
}

// NavMenu
export interface NavMenu {
  pathName: string
  menuName: string
}

export const NavMenuDatas: NavMenu[] = [
  {
    pathName: '/',
    menuName: 'Vision',
  },
  {
    pathName: '/',
    menuName: 'Why Emotional',
  },
  {
    pathName: '/',
    menuName: 'Services',
  },
  {
    pathName: '/',
    menuName: 'PartnerShip',
  },
  {
    pathName: '/',
    menuName: 'Contact',
  },
]
