import { HeroDatas } from '../../../datas/IndexDatas'
import { HeroViewDatas } from './viewDatas/HeroViewDatas'

//----------------------------------
// presenter
//----------------------------------
export interface IndexPresenter {
  heroViewDatas: () => HeroViewDatas
}

//----------------------------------
// cutom hooks
//----------------------------------
export const useIndexPresenter = () => {
  //----------------------------------
  // HeroViewDatas
  //----------------------------------
  /**
   * Heroに使用するViewDatas
   */
  const heroViewDatas = (): HeroViewDatas => {
    return {
      heroImgPath: heroImgPath(),
      heroCopy: heroCopy(),
      heroDesc: heroDesc(),
    }
  }

  /**
   * Heroの画像パスを返す
   */
  const heroImgPath = (): string => {
    return HeroDatas.imgPath
  }

  /**
   * HeroCopyの文字列を改行コード区切りで配列に変換して返す
   */
  const heroCopy = (): string[] => {
    const copies = HeroDatas.copy.split('\n')
    return copies
  }

  /**
   * HeroDescの文字列を改行コード区切りで配列に変換して返す
   */
  const heroDesc = (): string[] => {
    const descs = HeroDatas.desc.split('\n')
    return descs
  }

  return { heroViewDatas }
}
