/**
 * Membersで使用するデータ
 */

import { Social } from './SocialDatas'

//----------------------------------
// MemberDatas
//----------------------------------
export interface Member {
  name: string
  imgPathname: string
  socials: Social[]
  introduce: string
}

export const MemberDatas: Member[] = [
  {
    name: 'RYOHEI WADA',
    imgPathname: '/pages/members/ryohei_wada.jpg',
    socials: [
      {
        name: 'twitter',
        path: '//twitter.com/ryoppei_/',
      },
      {
        name: 'facebook',
        path: '//www.facebook.com/wada.ryohei.3/',
      },
      {
        name: 'website',
        path: '//yu-ra-gi.com/',
      },
    ],
    introduce:
      '「YURAGI（ユラギ）」という屋号でデザイナーをしています。\nこれまでEC、制作会社、スタートアップを複数社経験。\nデザイン・エンジニアリング問わず、『UXを事業という核から考えビジネス課題を解決すること』をもっとも得意としています。\nUI/UXデザインとエンジニアリングを横断できる「UXデザイナー/UXエンジニア」のポジションで多くのデザインや開発に取り組む。\n2018年にはスタートアップで「UI/UXデザイナー・フロントエンドエンジニア」としてiOSやウェブフロントエンド開発を担当。\n2019年以降はスタートアップで企業や事業における「事業/企業ブランディング・組織作り」をUXデザイナーとして経験。\nクライアントと共に課題解決の為の事業戦略を考え、ビジネス課題の解決へ向けて『人の感情を動かす』デザインで制作や事業に取り組んでいます。',
  },
  {
    name: 'MASATO NAKAMURA',
    socials: [
      {
        name: 'twitter',
        path: '//twitter.com/_masatojpn/',
      },
      {
        name: 'facebook',
        path: '//www.facebook.com/masato.nakamura.jpn/',
      },
      {
        name: 'website',
        path: '//masatonakamura.work/',
      },
    ],
    introduce:
      '「UNRAVEL（アンレーベル）」という屋号でデザイナーをしています。\nこれまでEC、制作会社など複数社経験。\nVIのブラッシュアップなど企業の顔となる「デザイン」や「ブランディング」をもっとも得意としています。\n過去、自社ブランドECを展開する企業でリブランディングを実施。月商1億（前月比10倍）を達成しました。\n2018年にはAdobe XDに関するツールを開発し、デベロッパーとしても活動。\n以降、全国で行われているAdobeイベント「Adobe XD Meeting」や、クリエイターの祭典「Adobe MAX Japan 2019」にスピーカーとして登壇。\n2019年以降はフロントエンドエンジニアとして大手広告代理店、大手企業のキャンペーンサイトなど多数手掛ける。\nデザイナーとフロントエンドエンジニアを両立し、\nクライアントが抱えるビジネスの課題に対し、『視覚から感情に訴えかけるデザイン』で制作に取り組んでいます。',
    imgPathname: '/pages/members/masato_nakamura.jpg',
  },
]
