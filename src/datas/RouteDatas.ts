/**
 * Routingで使用するデータ
 */
//----------------------------------
// RouteDatas
//----------------------------------
export interface RouteType {
  index: {
    pathname: string
    path: string
  }
  services: {
    pathname: string
    path: string
  }
  servicesPartner: {
    pathname: string
    path: string
  }
  members: {
    pathname: string
    path: string
  }
  contact: {
    pathname: string
    path: string
  }
  thanks: {
    pathname: string
    path: string
  }
}

export const RouteDatas: RouteType = {
  //----------------------------------
  // Index Page
  //----------------------------------
  // @path ---- /index
  index: {
    pathname: 'Index',
    path: '/',
  },

  //----------------------------------
  // Services Page
  //----------------------------------
  // @path ---- /service
  services: {
    pathname: 'Services',
    path: '/services',
  },

  // @path ---- /services/partner
  servicesPartner: {
    pathname: 'Partner',
    path: '/partner',
  },

  //----------------------------------
  // Members Page
  //----------------------------------
  // @path ---- /members
  members: {
    pathname: 'Members',
    path: '/members',
  },

  //----------------------------------
  // Contact Page
  //----------------------------------
  // @path ---- /contact
  contact: {
    pathname: 'Contact',
    path: '/contact',
  },

  //----------------------------------
  // Thanks Page
  //----------------------------------
  // @path ---- /thanks
  thanks: {
    pathname: 'Thanks',
    path: '/thanks',
  },
}
