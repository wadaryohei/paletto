/**
 * pages/Indexで使用するデータ
 * - コンポーネントに渡す静的なデータを記述する
 */
import { RoutingPath } from '../const/RoutingPath'

//----------------------------------
// HeadDatas
//----------------------------------
export interface Head {
  title: string
  description: string
  pathName: string
}

export const HeadDatas: Head = {
  title: 'Paletto',
  description: '世界にエモーショナルなデザインを。',
  pathName: RoutingPath.index,
}

//----------------------------------
// HeroDatas
//----------------------------------
export interface Hero {
  imgPath: string
  copyEnFirst: string
  copyEnSecond: string
  copyJp: string
}

export const HeroDatas: Hero = {
  imgPath: '/hero.png',
  copyEnFirst: 'Design To Moves.',
  copyEnSecond: 'Design To Heaert.',
  copyJp: '感情を動かすデザインを。',
}

//----------------------------------
// NavMenuDatas
//----------------------------------
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
