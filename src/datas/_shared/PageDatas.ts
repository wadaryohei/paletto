/**
 * 下層ページで使用するデータ
 * - コンポーネントに渡す静的なデータを記述する
 */
import { RouteDatas } from './RouteDatas'

//----------------------------------
// PageDatas
//----------------------------------
export interface Page {
  about: {
    pathname: string
    pageHeaderBgPathname: string
  }
  services: {
    pathname: string
    pageHeaderBgPathname: string
  }
  members: {
    pathname: string
    pageHeaderBgPathname: string
  }
  contact: {
    pathname: string
    pageHeaderBgPathname: string
  }
}

export const PageDatas: Page = {
  about: {
    pathname: RouteDatas.about.path,
    pageHeaderBgPathname: '/pages/about.jpg',
  },
  services: {
    pathname: RouteDatas.services.path,
    pageHeaderBgPathname: '/pages/services.jpg',
  },
  members: {
    pathname: RouteDatas.members.path,
    pageHeaderBgPathname: '/pages/members.jpg',
  },
  contact: {
    pathname: RouteDatas.contact.path,
    pageHeaderBgPathname: '/pages/contact.jpg',
  },
}
