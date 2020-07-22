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
    pageHeading: string
  }
  services: {
    pathname: string
    pageHeaderBgPathname: string
    pageHeading: string
  }
  members: {
    pathname: string
    pageHeaderBgPathname: string
    pageHeading: string
  }
  contact: {
    pathname: string
    pageHeaderBgPathname: string
    pageHeading: string
  }
}

export const PageDatas: Page = {
  about: {
    pathname: RouteDatas.about.path,
    pageHeaderBgPathname: '/pages/about.jpg',
    pageHeading: 'Designing emotions and expressing a unique world view.',
  },
  services: {
    pathname: RouteDatas.services.path,
    pageHeaderBgPathname: '/pages/services.jpg',
    pageHeading: 'We solve problems through UI/UX and create new value.',
  },
  members: {
    pathname: RouteDatas.members.path,
    pageHeaderBgPathname: '/pages/members.jpg',
    pageHeading:
      'Solve business problems with members from diverse backgrounds.',
  },
  contact: {
    pathname: RouteDatas.contact.path,
    pageHeaderBgPathname: '/pages/contact.jpg',
    pageHeading: 'Request a business solution for a problem as a partner.',
  },
}
