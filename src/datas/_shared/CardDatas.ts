import { RouteDatas } from './RouteDatas'

//----------------------------------
// ServicesDatas
//----------------------------------
export interface ServicesCardType {
  imgPathname: string
  copyEn: string
  copyJp: string
  lead: string
  viewMorePath: string
}

export const ServicesCardDatas: ServicesCardType[] = [
  {
    imgPathname: '/top/services/cardbg_01.jpg',
    copyEn: 'Design/Development partnerShips',
    copyJp: 'デザイン/開発パートナー事業',
    lead:
      'デジタルプロダクト開発（UI/UXデザイン）をベースに、既存事業の改善、新規事業立ち上げ、ブランド構築、デザイン組織支援、そしてあらゆるビジネス課題の解決を実現する「戦略〜開発〜改善」のサイクルをワンストップでフルコミット・フルスクラッチで行う事業です。',
    viewMorePath: RouteDatas.servicesPartner.path,
  },

  /**
   * @todo 事業をひとつに統一する予定なので一旦コメントアウト
   */
  // {
  //   imgPathname: '/top/services/cardbg_02.jpg',
  //   copyEn: 'Development PartnerShips',
  //   copyJp: '制作パートナー事業',
  //   lead:
  //     'ビジネス課題の解決へ向けて行う「制作」をベースとした、「デザイン・開発」の両方もしくはそのいずれかをパートナーとしてサポートしていく事業です。コンテンツの制作やコンサルティング、開発から運用・保守までを幅広く対応して行う事業です。',
  //   viewMorePath: RouteDatas.servicesDevelopment.path,
  // },
]

//----------------------------------
// ThinkCardDatas
//----------------------------------
export interface ThinkCardType {
  num: string
  copy: string
  imgPathname: string
  lead: string
}

export const ThinkCardDatas: ThinkCardType[] = [
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
