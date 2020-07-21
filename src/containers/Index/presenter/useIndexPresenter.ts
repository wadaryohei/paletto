import { HeroDatas } from '../../../datas/IndexDatas'
import { HeroViewDatas } from './viewDatas/HeroViewDatas'
import { useStringProcessing } from '../../../hooks/useStringProcessing'

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
  // hooks
  //----------------------------------
  const stringProcessing = useStringProcessing()

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
    return stringProcessing.strToSplit(HeroDatas.copy)
  }

  /**
   * HeroDescの文字列を改行コード区切りで配列に変換して返す
   */
  const heroDesc = (): string[] => {
    return stringProcessing.strToSplit(HeroDatas.desc)
  }

  return { heroViewDatas }
}
