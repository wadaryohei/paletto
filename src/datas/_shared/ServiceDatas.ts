/**
 * Servicesで使用するデータ
 * - コンポーネントに渡す静的なデータを記述する
 */
import { RouteDatas } from './RouteDatas'

//----------------------------------
// ServicesDatas
//----------------------------------
export interface Services {
  num: string
  bgPathName: string
  titleEn: string
  titleJp: string
  lead: string
  viewMorePath: string
}

export const ServicesDatas: Services[] = [
  {
    num: '01',
    bgPathName: '/top/services/cardbg_01.jpg',
    titleEn: 'Design partnerShips',
    titleJp: 'デザインパートナー事業',
    lead:
      'デジタルプロダクト開発（UI/UXデザイン）に強みを置き、既存事業の改善、新規事業立ち上げ、ブランド構築、デザイン組織支援、そしてあらゆるビジネス課題の解決を実現する「制作〜開発〜改善」のサイクルをワンストップでフルコミット・フルスクラッチを行う事業です。',
    viewMorePath: RouteDatas.servicesDesign.pathName,
  },
  {
    num: '02',
    bgPathName: '/top/services/cardbg_02.jpg',
    titleEn: 'Development PartnerShips',
    titleJp: '制作パートナー事業',
    lead:
      'ビジネス課題の解決へ向けて行う「制作」をベースとした、「デザイン・開発」の両方もしくはそのいずれかをパートナーとしてサポートしていく事業です。コンテンツの制作やコンサルティング、開発から運用・保守までを幅広く対応して行う事業です。',
    viewMorePath: RouteDatas.servicesDevelopment.pathName,
  },
  // {
  //   num: '03',
  //   bgPathName: '/top/services/cardbg_03.jpg',
  //   titleEn: 'Starter PartnerShips',
  //   titleJp: 'スターターパートナー事業',
  //   lead:
  //     '予算や時間や人をあまり配置できない方へSTUDIOなどのノーコード系ツールを用い、いくつかの制作工程を省くことでスピード重視のビジネス課題の解決を行います。小さく始めて、素早く仮設を検証しながら実行→改善→スケールしていくための事業です。',
  //   viewMorePath: '',
  // },
]
