/**
 * Routingで使用するデータ
 * - コンポーネントに渡す静的なデータを記述する
 */

//----------------------------------
// RouteDatas
//----------------------------------
export interface Route {
  index: {
    path?: string
    pathName: string
  }
  about: {
    path: string
    pathName: string
  }
  services: {
    path: string
    pathName: string
  }
  servicesDesign: {
    path: string
    pathName: string
  }
  servicesDevelopment: {
    path: string
    pathName: string
  }
  members: {
    path: string
    pathName: string
  }
  contact: {
    path: string
    pathName: string
  }
}

export const RouteDatas: Route = {
  //----------------------------------
  // Index Page
  //----------------------------------
  // @path ---- /index
  index: {
    path: 'Index',
    pathName: '/',
  },

  //----------------------------------
  // About Page
  //----------------------------------
  // @path ---- /about
  about: {
    path: 'About',
    pathName: '/about',
  },

  //----------------------------------
  // Services Page
  //----------------------------------
  // @path ---- /service
  services: {
    path: 'Services',
    pathName: '/services',
  },

  // @path ---- /services/design
  servicesDesign: {
    path: 'Design',
    pathName: '/design',
  },

  // @path ---- /services/development
  servicesDevelopment: {
    path: 'Development',
    pathName: '/development',
  },

  //----------------------------------
  // Members Page
  //----------------------------------
  // @path ---- /members
  members: {
    path: 'Members',
    pathName: '/members',
  },

  //----------------------------------
  // Contact Page
  //----------------------------------
  // @path ---- /contact
  contact: {
    path: 'Contact',
    pathName: '/contact',
  },
}
