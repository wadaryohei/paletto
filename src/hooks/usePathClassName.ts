//----------------------------------
// types
//----------------------------------
export interface typePathClassName {
  activePathClassName: () => string
}

//----------------------------------
// custom hooks
//----------------------------------
export const usePathClassName = (pathName: string): typePathClassName => {
  /**
   * 現在のアクティブなパスのスラッシュを削除してクラス名を付与する
   */
  const activePathClassName = (): string => {
    const str = pathName.slice(1)
    return str === '' ? 'index' : 'pages'
  }
  return { activePathClassName }
}
