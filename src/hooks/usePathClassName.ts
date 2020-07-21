//----------------------------------
// types
//----------------------------------
export interface PathClassName {
  activePathClassName: () => string
}

//----------------------------------
// custom hooks
//----------------------------------
export const usePathClassName = (pathName: string) => {
  /**
   * 現在のアクティブなパスのスラッシュを削除してクラス名を付与する
   */
  const activePathClassName = (): string => {
    const str = pathName.slice(1)
    return str === '' ? 'index' : 'pages'
  }
  return { activePathClassName }
}
