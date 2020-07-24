/**
 * Indexページで使用するデータ
 */
import { RouteDatas } from './_shared/RouteDatas'

//----------------------------------
// HeadDatas
//----------------------------------
export interface Head {
  title: string
  description: string
  pathname: string
}

export const HeadDatas: Head = {
  title: 'Paletto',
  description: '世界にエモーショナルなデザインを。',
  pathname: RouteDatas.index.pathname,
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
    'We solve business problems by design.\nビジネス課題の先の「感情を動かす」デザイン制作チームです。',
  // desc:
  //   'We solve business problems by design.\nAnd a design team that embodies our thoughts.\nビジネス課題の先の「感情を動かす」デザイン制作チームです。',
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
  // sectionPlans: {
  //   heading: 'OUR THINK.',
  //   subHeading: '私達の考え',
  //   copy: 'サブスクリプションを採用',
  // },
}

//----------------------------------
// ThinkDatas
//----------------------------------
export interface Think {
  num: string
  copy: string
  imgPathname: string
  lead: string
}

export const ThinkDatas: Think[] = [
  {
    num: '01',
    copy: '長期的なパートナー戦略',
    imgPathname: '/top/think/think_icn_01.svg',
    lead:
      '長期的なパートナーシップを取ることにより、戦略立案からプロダクト開発、グロースまで可能です。',
  },
  {
    num: '02',
    copy: 'デザイン戦略の調整',
    imgPathname: '/top/think/think_icn_02.svg',
    lead:
      '目まぐるしく変わる状況に合わせて、課題解決や価値創造へのアプローチを的確に日々調整します。',
  },
  {
    num: '03',
    copy: '一貫したデザインと制作',
    imgPathname: '/top/think/think_icn_03.svg',
    lead:
      'デザインから制作までを一気通貫で担当するので、クオリティの担保と運用・保守までを実現します。',
  },
]
