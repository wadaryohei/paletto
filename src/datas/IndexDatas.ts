/**
 * pages/Indexで使用するデータ
 * - コンポーネントに渡す静的なデータを記述する
 */
import { RoutingPath } from '../const/RoutingPath'

//----------------------------------
// HeadDatas
//----------------------------------
export interface Head {
  title: string
  description: string
  pathName: string
}

export const HeadDatas: Head = {
  title: 'Paletto',
  description: '世界にエモーショナルなデザインを。',
  pathName: RoutingPath.index,
}

//----------------------------------
// HeroDatas
//----------------------------------
export interface Hero {
  imgPath: string
  copyEnFirst: string
  copyEnSecond: string
  copyJp: string
}

export const HeroDatas: Hero = {
  imgPath: '/hero.png',
  copyEnFirst: 'Design To Moves.',
  copyEnSecond: 'Design To Heaert.',
  copyJp: '感情を動かすデザインを。',
}

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

//----------------------------------
// ServicesDatas
//----------------------------------
export interface Serivces {
  num: string
  title: string
  copy: string
  lead: string
  bgPathName: string
}

export const ServicesDatas: Serivces[] = [
  {
    num: '01',
    title: 'Solved',
    copy: 'デザインで多種多様なビジネス課題を解決します。',
    lead:
      '私達はパートナーのプロダクト開発、新規事業立ち上げ、ブランド構築、組織支援など、クライアント企業の様々なビジネス課題をデザインの力で解決します。',
    bgPathName: '/card_bg_a.png',
  },
  {
    num: '02',
    title: 'Creative',
    copy: '一貫したクオリティと多岐に渡るクリエイティブを提供。',
    lead:
      '私達はデザイン企業ですが、それだけではありません。開発、映像制作、広告も。VIの制作から、印刷物、ウェブサイト制作などワンストップで制作致します。',
    bgPathName: '/card_bg_b.png',
  },
  {
    num: '03',
    title: 'Maintenable',
    copy: '更新・管理・運用。すべてを任せられるパートナー。',
    lead:
      '制作したものを長期的な更新・管理・運用のすべてを承ります。ウェブや印刷物といった多岐に渡る媒体全てでの運用をすることが可能です。',
    bgPathName: '/card_bg_c.png',
  },
]
