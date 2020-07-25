/**
 * Servicesページで使用するデータ
 */

//--------------------------------------------------------------------
// ServicesDesign
//--------------------------------------------------------------------
//----------------------------------
// ServicesDesignDatas
//----------------------------------
export interface ServicesDesign {
  bgPathName: string
  heading: string
  subHeading: string
}

export const ServicesDesignDatas = {
  bgPathName: '/top/services/cardbg_01.jpg',
  heading: 'Design partnerShips',
  subHeading: 'デザインパートナー事業',
}

//----------------------------------
// ServicesDesignActionDatas
//----------------------------------
export interface ServicesDesignAction {
  num: string
  copyEn: string
  copyJp: string
  lead: string
}

export const ServicesDesignActionDatas: ServicesDesignAction[] = [
  {
    num: '01',
    copyEn: 'Having ownership.',
    copyJp: 'オーナーシップを持つ',
    lead:
      'クライアントのビジネスをしっかりと理解し、同じ熱量を持って、まるでチームに最高のデザイナーがいるような最高のパートナーデザインに取り組みます。',
  },
  {
    num: '02',
    copyEn: 'Find out the essence.',
    copyJp: '本質を見極める',
    lead:
      '「ドリルを買いにきた人が欲しいのはドリルではなく『穴』である」という言葉があるように、物事のコアである本質を見極め、極限まで突き詰めることで本質を突いたデザインに取り組みます。',
  },
  {
    num: '03',
    copyEn: 'Strike a chord.',
    copyJp: '共感を呼ぶ',
    lead:
      '使ってくれるユーザーを理解し、ユーザーがどのように行動するのか、身体的および感情的なニーズは何か、世界をどのように考えているのかなどユーザーを理解することで共感を呼ぶデザインに取り組みます。',
  },
  {
    num: '04',
    copyEn: 'Moved Emotions.',
    copyJp: '感情を揺さぶる',
    lead:
      'デザインされたプロダクトやサービスに触れたユーザーが何を思い、何を感じるのかまでを考えます。ユーザーにとっての最高の体験を突き詰めることで熱狂的なファンになるような感情を揺さぶるデザインに取り組みます。',
  },
]

//----------------------------------
// ServicesDesignActionDatas
//----------------------------------
export interface ServicesDesignPartners {
  num: string
  copyEn: string
  copyJp: string
  lead: string
  solution: string
}

export const ServicesDesignPartnersDatas: ServicesDesignPartners[] = [
  {
    num: '01',
    copyEn: 'Glow up.',
    copyJp: '事業のグロース支援',
    lead:
      '「Paletto.」では新規事業・既存事業など関係無く事業のグロース支援を行います。経営者または事業責任者と共にチームを組みデザインパートナーとして事業のコアとなる戦略を共に考え、クライアントチームのデザイナーやエンジニアとチームになりプロダクトの開発、グロースまでを長期的にコミットし続けます。',
    solution:
      '新規事業立ち上げや既存プロダクトのUI/UX改善など、戦略策定、プロダクト開発、さらにグロースフェーズまで一気通貫で並走します。ユーザー視点とビジネスへの貢献、どちらも欠けることのない直感的で使いやすいインターフェイスを実現します。アウトプットはWeb/iOS/Android/IoTなど多岐に渡ります。',
  },
  {
    num: '02',
    copyEn: 'Build Branding.',
    copyJp: '事業のブランディング支援',
    lead:
      '企業の核となるミッションやビジョンやバリューを共に作り上げます。企業や事業がなぜ存在するのか？なぜその事業をやるのか？何をするのか？を共に戦略ベースで考え言語化・ビジュアル化します。',
    solution:
      '戦略思考でビジョンを描き、ブランドのコアを内側からデザインします。企業や事業の成り立ち、原体験を紐解き、事業・業界・社会的文脈などを一貫したブランドの思想として言語化・可視化します。アウトプットは、ビジョン、ミッション、ロゴデザイン、プロダクトデザインなど多岐に渡ります。',
  },
]

//--------------------------------------------------------------------
// ServicesDevelopment
//--------------------------------------------------------------------
//----------------------------------
// ServicesDevelopmentDatas
//----------------------------------
export interface ServicesDevelopment {
  bgPathName: string
  heading: string
  subHeading: string
}

export const ServicesDevelopmentDatas = {
  bgPathName: '/top/services/cardbg_02.jpg',
  heading: 'Develoment partnerShips',
  subHeading: '制作パートナー事業',
}
