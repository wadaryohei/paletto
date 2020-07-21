/**
 * Membersで使用するデータ
 * - コンポーネントに渡す静的なデータを記述する
 */

import { SocialDatas } from './SocialDatas'

//----------------------------------
// MemberDatas
//----------------------------------
export interface Member {
  name: string
  imgPath: string
  socials: SocialDatas[]
  introduce: string
}

export const MemberDatas: Member[] = [
  {
    name: 'RYOHEI WADA',
    imgPath: '/pages/members/ryohei_wada.jpg',
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
        name: 'webSite',
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
        name: 'webSite',
        path: '//masatonakamura.work/',
      },
    ],
    introduce:
      '「YURAGI」という屋号でデザイナーをしています。\nこれまでEC、制作会社、スタートアップを複数社経験。\n製品やサービスから得られる体験の質を高めることをベースに、ユーザーセンタードな「UI/UXデザイン」に取り組んできました。\nまた、クライアントが抱えるビジネス課題の解決にデザインやフロントエンドからアプローチを行なってきました。\n「UI/UXデザイナー」であり、またウェブフロントエンドの実装も可能な「UXエンジニア」と呼ばれるようなポジションで制作や事業へ取り組むことが多いです。',
    imgPath: '/pages/members/masato_nakamura.jpg',
  },
]
