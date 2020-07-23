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
  index: {
    path: 'Index',
    pathName: '/',
  },
  about: {
    path: 'About',
    pathName: '/about',
  },
  services: {
    path: 'Services',
    pathName: '/services',
  },
  servicesDesign: {
    path: 'Design',
    pathName: '/services/design',
  },
  servicesDevelopment: {
    path: 'Development',
    pathName: '/services/development',
  },
  members: {
    path: 'Members',
    pathName: '/members',
  },
  contact: {
    path: 'Contact',
    pathName: '/contact',
  },
}
