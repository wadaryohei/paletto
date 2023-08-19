import { RouteDatas } from '@/datas/RouteDatas'

export interface NavMenuType {
  path: string
  menuname: string
}

export const NavMenuDatas: NavMenuType[] = [
  {
    path: RouteDatas.services.path,
    menuname: RouteDatas.services.pathname,
  },
  {
    path: RouteDatas.members.path,
    menuname: RouteDatas.members.pathname,
  },
  {
    path: RouteDatas.contact.path,
    menuname: RouteDatas.contact.pathname,
  },
]
