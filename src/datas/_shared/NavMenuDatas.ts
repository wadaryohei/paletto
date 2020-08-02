import { RouteDatas } from './RouteDatas'

export interface NavMenuType {
  path: string
  menuname: string
}

export const NavMenuDatas: NavMenuType[] = [
  {
    path: RouteDatas.about.path,
    menuname: RouteDatas.about.pathname,
  },
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
