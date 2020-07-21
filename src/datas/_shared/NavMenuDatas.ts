/**
 * navMenuで使用するデータ
 * - コンポーネントに渡す静的なデータを記述する
 */

//----------------------------------
// NavMenuDatas
//----------------------------------
import { RouteDatas } from './RouteDatas'

export interface NavMenu {
  pathName: string
  menuName: string
}

export const NavMenuDatas: NavMenu[] = [
  {
    pathName: RouteDatas.about.pathName,
    menuName: RouteDatas.about.path,
  },
  {
    pathName: RouteDatas.services.pathName,
    menuName: RouteDatas.services.path,
  },
  {
    pathName: RouteDatas.members.pathName,
    menuName: RouteDatas.members.path,
  },
  {
    pathName: RouteDatas.contact.pathName,
    menuName: RouteDatas.contact.path,
  },
]
