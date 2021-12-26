import { SocialType } from './SocialDatas'

export interface MemberType {
  name: string
  imgPathname: string
  socials: SocialType[]
  introduce: string
}

export const MemberDatas: MemberType[] = [
  {
    name: 'RYOHEI WADA',
    imgPathname: '/pages/members/ryohei_wada.jpg',
    socials: [
      {
        name: 'twitter',
        path: '//twitter.com/ryohei_nt/',
      },
      {
        name: 'facebook',
        path: '//www.facebook.com/wada.ryohei.3/',
      },
      {
        name: 'website',
        path: '//ryoheiwada.com/',
      },
    ],
    introduce:
      '「YURAGI（ユラギ）」という屋号でデザイナーをしています。\nこれまでEC、制作会社、スタートアップを複数社経験。\nデザイン・エンジニアリング問わず、『UXを事業という核から考えビジネス課題を解決すること』をもっとも得意としています。\nUI/UXデザインとエンジニアリングを横断できる「UXデザイナー/UXエンジニア」のポジションで多くのデザインや開発に取り組む。\n2018年にはスタートアップで「UI/UXデザイナー・フロントエンドエンジニア」としてiOSやウェブフロントエンド開発を担当。\n2019年以降はスタートアップで企業や事業における「事業/企業ブランディング・組織作り」をUXデザイナーとして経験。\nクライアントと共に課題解決の為の事業戦略を考え、ビジネス課題の解決へ向けて『人の感情を動かす』デザインで制作や事業に取り組んでいます。',
  },
]
