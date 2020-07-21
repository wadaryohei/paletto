/**
 * pages/Indexで使用するデータ
 * - コンポーネントに渡す静的なデータを記述する
 */
import { RouteDatas } from './_shared/RouteDatas'

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
  pathName: RouteDatas.index.pathName,
}

//----------------------------------
// HeroDatas
//----------------------------------
export interface Hero {
  imgPath: string
  copy: string
  desc: string
}

export const HeroDatas: Hero = {
  imgPath: '/top/hero.jpg',
  copy: 'We design for\nDESIGN TO MOVES\nEMOTIONS.',
  desc:
    'We are a design team that takes shape.\nWe are a design team that takes shape.',
}

//----------------------------------
// SectionHeadingDatas
//----------------------------------
export interface SectionHeading {
  SectionVision: {
    heading: string
    subHeading: string
    copy: string
  }
  sectionApproach: {
    heading: string
    subHeading?: string
    copy: string
  }
  sectionService: {
    heading: string
    subHeading: string
    copy: string
  }
  sectionThink: {
    heading: string
    subHeading: string
    copy: string
  }
  sectionPlans: {
    heading: string
    subHeading: string
    copy: string
  }
}

export const SectionHeadingDatas: SectionHeading = {
  SectionVision: {
    heading: 'OUR VISION.',
    subHeading: '私達のビジョン',
    copy: '感情を動かすデザインを',
  },
  sectionApproach: {
    heading: 'APPROACH.',
    copy: '当たり前のその先へ',
  },
  sectionService: {
    heading: 'OUR SERVICE.',
    subHeading: '私達ができること',
    copy: 'デザインから制作まで幅広く',
  },
  sectionThink: {
    heading: 'OUR THINK.',
    subHeading: '私達の考え',
    copy: 'サブスクリプションを採用',
  },
  sectionPlans: {
    heading: 'OUR THINK.',
    subHeading: '私達の考え',
    copy: 'サブスクリプションを採用',
  },
}

//----------------------------------
// ServicesDatas
//----------------------------------
export interface Services {
  num: string
  bgPathName: string
  titleEn: string
  titleJp: string
  lead: string
}

export const ServicesDatas: Services[] = [
  {
    num: '01',
    bgPathName: '/top/services/cardbg_01.jpg',
    titleEn: 'Design partnerShips',
    titleJp: 'デザインパートナー事業',
    lead:
      'デジタルプロダクト開発（UI/UXデザイン）に強みを置き、既存事業の改善、新規事業立ち上げ、ブランド構築、デザイン組織支援、そしてあらゆるビジネス課題の解決を実現する「制作〜開発〜改善」のサイクルをワンストップでフルコミット・フルスクラッチを行う事業です。',
  },
  {
    num: '02',
    bgPathName: '/top/services/cardbg_02.jpg',
    titleEn: 'Development PartnerShips',
    titleJp: '制作パートナー事業',
    lead:
      'ビジネス課題の解決へ向けて行う「制作」をベースとした、「デザイン・開発」の両方もしくはそのいずれかをパートナーとしてサポートしていく事業です。コンテンツの制作やコンサルティング、開発から運用・保守までを幅広く対応して行う事業です。',
  },
  {
    num: '03',
    bgPathName: '/top/services/cardbg_03.jpg',
    titleEn: 'Starter PartnerShips',
    titleJp: 'スターターパートナー事業',
    lead:
      '予算や時間や人をあまり配置できない方へSTUDIOなどのノーコード系ツールを用い、いくつかの制作工程を省くことでスピード重視のビジネス課題の解決を行います。小さく始めて、素早く仮設を検証しながら実行→改善→スケールしていくための事業です。',
  },
]

//----------------------------------
// ThinkDatas
//----------------------------------
export interface Think {
  num: string
  copy: string
  imgPathName: string
  lead: string
}

export const ThinkDatas: Think[] = [
  {
    num: '01',
    copy: '長期的なパートナー戦略',
    imgPathName: '/top/think/think_icn_01.svg',
    lead:
      '長期的なパートナーシップを取ることにより、戦略立案からプロダクト開発、グロースまで可能です。',
  },
  {
    num: '02',
    copy: 'デザイン戦略の調整',
    imgPathName: '/top/think/think_icn_02.svg',
    lead:
      '目まぐるしく変わる状況に合わせて、課題解決や価値創造へのアプローチを的確に日々調整します。',
  },
  {
    num: '03',
    copy: '一貫したデザインと制作',
    imgPathName: '/top/think/think_icn_03.svg',
    lead:
      'デザインから制作までを一気通貫で担当するので、クオリティの担保と運用・保守までを実現します。',
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
