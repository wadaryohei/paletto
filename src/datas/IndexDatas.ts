/**
 * Indexページで使用するデータ
 */

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
    'テクノロジーとデザインで、\n課題解決のその先の「感情を動かす」チームです',
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
    copy: 'ビジネス課題の解決',
  },
  sectionThink: {
    heading: 'OUR THINK.',
    subHeading: '私達の考え',
    copy: 'サブスクリプションを採用',
  },
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
