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
      '「YURAGI」という屋号でデザイナーをしています。\nこれまでEC、制作会社、スタートアップを複数社経験。\n製品やサービスから得られる体験の質を高めることをベースに、ユーザーセンタードな「UI/UXデザイン」に取り組んできました。\nまた、クライアントが抱えるビジネス課題の解決にデザインやフロントエンドからアプローチを行なってきました。\n「UI/UXデザイナー」であり、またウェブフロントエンドの実装も可能な「UXエンジニア」と呼ばれるようなポジションで制作や事業へ取り組むことが多いです。',
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
      '「UNRAVEL（アンレーベル）」という屋号でデザイナーをしています。\nこれまでEC、制作会社など複数社経験。VIのブラッシュアップなど企業の顔となる「デザイン」や「ブランディング」をもっとも得意としています。\n過去、自社ブランドECを展開する企業でリブランディングを実施。月商1億（前月比10倍）を達成しました。\n2018年にはAdobe XDに関するツールを開発し、デベロッパーとしても活動。\n以降、全国で行われているAdobeイベント「Adobe XD Meeting」や、クリエイターの祭典「Adobe MAX Japan 2019」にスピーカーとして登壇。\n2019年以降はフロントエンドエンジニアとして大手広告代理店、大手企業のキャンペーンサイトなど多数手掛ける。\nデザイナーとフロントエンドエンジニアを両立し、\nクライアントが抱えるビジネスの課題に対し、『視覚から感情に訴えかけるデザイン』で制作に取り組んでいます。',
    imgPathname: '/pages/members/masato_nakamura.jpg',
  },
]
