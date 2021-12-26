import { RouteDatas } from './RouteDatas'

export interface PageType {
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
    pageHeading: string
  }
  thanks: {
    pathname: string
    pageHeading: string
  }
}

export const PageDatas: PageType = {
  services: {
    pathname: RouteDatas.services.pathname,
    pageHeaderBgPathname: '/pages/services.jpg',
    pageHeading: 'We solve problems through UI/UX and create new value.',
  },
  members: {
    pathname: RouteDatas.members.pathname,
    pageHeaderBgPathname: '/pages/members.jpg',
    pageHeading: 'Solve business problems with members from diverse backgrounds.',
  },
  contact: {
    pathname: RouteDatas.contact.pathname,
    pageHeading: 'Request a business solution for a problem as a partner.',
  },
  thanks: {
    pathname: RouteDatas.thanks.pathname,
    pageHeading: 'Please wait for a few days. Thank you for your inquiry.',
  },
}
