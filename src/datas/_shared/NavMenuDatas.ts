/**
 * navMenuで使用するデータ
 * - コンポーネントに渡す静的なデータを記述する
 */

//----------------------------------
// NavMenuDatas
//----------------------------------
export interface NavMenu {
  pathName: string
  menuName: string
}

export const NavMenuDatas: NavMenu[] = [
  {
    pathName: '/',
    menuName: 'Vision',
  },
  {
    pathName: '/',
    menuName: 'Why Emotional',
  },
  {
    pathName: '/',
    menuName: 'Services',
  },
  {
    pathName: '/',
    menuName: 'PartnerShip',
  },
  {
    pathName: '/',
    menuName: 'Contact',
  },
]
