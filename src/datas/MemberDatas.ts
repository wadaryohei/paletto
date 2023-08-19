import { SocialType } from '@/datas/SocialDatas'

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
        name: 'Twitter',
        path: '//twitter.com/ryohei_nt/',
      },
      {
        name: 'Facebook',
        path: '//www.facebook.com/wada.ryohei.3/',
      },
      {
        name: 'Note',
        path: '//note.com/ryoppei/',
      },
    ],
    introduce:
      '1989年3月17日生まれ。\n最近までエンジニアリング領域にいましたが、現在はPdMでマネージャーとして働いています。\nこれまでのデザイナー・エンジニアというキャリアを活かし、デザインとエンジニアリングを横断することが可能です。\nデザインとエンジニアリングの境界を行き来し、課題に対して「デザイン・エンジニアリング」どちらのアプローチが最適かを正確に判断することが得意です。\nまた、定量・定性データによる分析、仮説から課題を導き出し、実際にデザインやエンジニアリングによる実装をひと通り行うことができます。\n「プロジェクトマネジメント・プロダクトマネジメント」においても課題発見から施策実施と検証までを行うことも可能です。',
  },
  {
    name: 'MASATO NAKAMURA',
    imgPathname: '/pages/members/masato_nakamura.jpg',
    socials: [],
    introduce:
      'UNRAVEL（アンレーベル）」という屋号でデザイナーをしています。\nこれまでEC、制作会社など複数社経験。VIのブラッシュアップなど企業の顔となる「デザイン」や「ブランディング」をもっとも得意としています。\n過去、自社ブランドECを展開する企業でリブランディングを実施。月商1億（前月比10倍）を達成しました。\n2018年にはAdobe XDに関するツールを開発し、デベロッパーとしても活動。\n以降、全国で行われているAdobeイベント「Adobe XD Meeting」や、クリエイターの祭典「Adobe MAX Japan 2019」にスピーカーとして登壇。\n2019年以降はフロントエンドエンジニアとして大手広告代理店、大手企業のキャンペーンサイトなど多数手掛ける。\nデザイナーとフロントエンドエンジニアを両立し、\nクライアントが抱えるビジネスの課題に対し、『視覚から感情に訴えかけるデザイン』で制作に取り組んでいます。',
  },
]
