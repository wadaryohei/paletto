/**
 * Servicesで使用するデータ
 */
import { RouteDatas } from './RouteDatas'

//----------------------------------
// ServicesDatas
//----------------------------------
export interface Services {
  imgPathname: string
  copyEn: string
  copyJp: string
  lead: string
  viewMorePath: string
}

export const ServicesDatas: Services[] = [
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
