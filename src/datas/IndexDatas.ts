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
  siteName: string
  copyEn: string
  copyJp: string
}

export const HeroDatas: Hero = {
  imgPath: '/hero.png',
  siteName: 'Paletto.',
  copyEn: 'DESIGN TO MOVES EMOTIONS.',
  copyJp: '感情を動かすデザインを',
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
export interface Services {
  num: string
  title: string
  copy: string
  lead: string
  bgPathName: string
}

export const ServicesDatas: Services[] = [
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

//----------------------------------
// PartnerShipDatas
//----------------------------------
export interface PartnerShip {
  planName: string
  recommendedCopy: string
  monthlyFee: number
  yearContract: number
  planDetails: string[]
  leadTime: number
}

export const PartnerShipDatas: PartnerShip[] = [
  {
    planName: 'スタンダードプラン',
    recommendedCopy: 'スピード重視でプロトタイプやリサーチを行いたい方',
    monthlyFee: 5,
    yearContract: 12,
    planDetails: [
      'デザイン・制作費無料',
      'トップ＋下層５ページ',
      '独自ドメイン',
      '問い合わせフォーム',
      '毎月の更新・管理',
      'アクセス解析',
    ],
    leadTime: 3,
  },
  {
    planName: 'プレミアムプラン',
    recommendedCopy: '組織にデザイン思考・デザイン経営を導入したい方',
    monthlyFee: 8,
    yearContract: 12,
    planDetails: [
      'デザイン・制作費無料',
      'トップ＋下層５ページ',
      '独自ドメイン',
      '問い合わせフォーム',
      '毎月の更新・管理',
      'アクセス解析',
      'デザイン組織の構築',
      'ブランディング戦略',
    ],
    leadTime: 3,
  },
]
