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
    path: 'index',
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
  members: {
    path: 'Members',
    pathName: '/members',
  },
  contact: {
    path: 'Contact',
    pathName: '/contact',
  },
}
