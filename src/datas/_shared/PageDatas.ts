/**
 * 固定ページで使用するデータ
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
  thanks: {
    pathname: string
    pageHeaderBgPathname: string
    pageHeading: string
  }
}

export const PageDatas: Page = {
  about: {
    pathname: RouteDatas.about.pathname,
    pageHeaderBgPathname: '/pages/about.jpg',
    pageHeading: 'Designing emotions and expressing a unique world view.',
  },
  services: {
    pathname: RouteDatas.services.pathname,
    pageHeaderBgPathname: '/pages/services.jpg',
    pageHeading: 'We solve problems through UI/UX and create new value.',
  },
  members: {
    pathname: RouteDatas.members.pathname,
    pageHeaderBgPathname: '/pages/members.jpg',
    pageHeading:
      'Solve business problems with members from diverse backgrounds.',
  },
  contact: {
    pathname: RouteDatas.contact.pathname,
    pageHeaderBgPathname: '/pages/contact.jpg',
    pageHeading: 'Request a business solution for a problem as a partner.',
  },
  thanks: {
    pathname: RouteDatas.thanks.pathname,
    pageHeaderBgPathname: '/pages/contact.jpg',
    pageHeading: 'Please wait for a few days. Thank you for your inquiry.',
  },
}
