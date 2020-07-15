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
  bgPathName: string
  titleEn: string
  titleJp: string
  copy: string
  lead: string
}

export const ServicesDatas: Services[] = [
  {
    num: '01',
    bgPathName: '/cardbg_01.jpg',
    titleEn: 'Design partnerships',
    titleJp: 'デザインパートナー事業',
    copy: 'デザインで多種多様なビジネス課題を解決します。',
    lead: `デジタルプロダクト開発（UI/UXデザイン）を強みに置き、新規事業立ち上げ、ブランド構築、デザイン組織支援などあらゆるビジネス課題にコミットします。\nクライアントと一緒に一つのチームとなり並走するデザインパートナーです。\nアウトプットの納品だけでなく、デザインの文化がクライアント組織に根付いてゆくことを目指します。`,
  },
  {
    num: '02',
    bgPathName: '/cardbg_02.jpg',
    titleEn: 'Web Creative PartnerShips',
    titleJp: 'Web制作パートナー事業',
    copy: '一貫したクオリティと多岐に渡るクリエイティブを提供。',
    lead:
      '私達はデザイン企業ですが、それだけではありません。開発、映像制作、広告も。VIの制作から、印刷物、ウェブサイト制作などワンストップで制作致します。\nWordPressのようなCMS構築からJamStackのようなモダンな技術での制作をしていきます。',
  },
]

//----------------------------------
// PlanDatas
//----------------------------------
export interface Plan {
  planName: string
  recommendedCopy: string
  monthlyFee: number
  yearContract: number
  planDetails: string[]
  leadTime: number
}

export const PlanDatas: Plan[] = [
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
