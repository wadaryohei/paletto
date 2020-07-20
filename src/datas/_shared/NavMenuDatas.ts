/**
 * navMenuで使用するデータ
 * - コンポーネントに渡す静的なデータを記述する
 */

//----------------------------------
// NavMenuDatas
//----------------------------------
import { RoutingPath } from  '../../const/RoutingPath'

export interface NavMenu {
  pathName: string
  menuName: string
}

export const NavMenuDatas: NavMenu[] = [
  {
    pathName: RoutingPath.about,
    menuName: 'About',
  },
  {
    pathName: RoutingPath.services,
    menuName: 'Services',
  },
  {
    pathName: RoutingPath.mebers,
    menuName: 'Members',
  },
  {
    pathName: RoutingPath.contact,
    menuName: 'Contact',
  },
]
