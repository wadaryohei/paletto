/**
 * Servicesページで使用するデータ
 */

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
  heading: 'Design/Development partnerShips',
  subHeading: 'デザイン/開発パートナー事業',
}

//----------------------------------
// ServicesDesignPartnersDatas
//----------------------------------
export interface ServicesDesignPartners {
  num: string
  copyEn: string
  copyJp: string
  lead: string
}

export const ServicesDesignPartnersDatas: ServicesDesignPartners[] = [
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
      '使ってくれるユーザーを理解し、ユーザーがどのように行動するのか、身体的および感情的なニーズは何か、世界をどのように考え捉えているのかなどユーザーを理解することで共感を呼ぶデザインに取り組みます。',
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
// ServicesDesignSolutionDatas
//----------------------------------
export interface ServicesDesignSolution {
  num: string
  copyEn: string
  copyJp: string
  lead: string
  solution: string
}

export const ServicesDesignSolutionDatas: ServicesDesignSolution[] = [
  {
    num: '01',
    copyEn: 'Glow up.',
    copyJp: '事業のグロース支援',
    lead:
      '「Paletto.」では新規事業・既存事業など関係無く事業のグロース支援を行います。経営者または事業責任者と共にチームを組みデザイン/開発パートナーとして事業のコアとなる戦略を共に考え、クライアントチームのデザイナーやエンジニアとチームになりプロダクト/サービスの開発、グロースまでを長期的にコミットし続けます。',
    solution:
      '新規事業立ち上げや既存プロダクト改善、上流である戦略をベースとした「戦略〜開発〜改善」をUI/UXを考えながらプロダクト開発を進め、グロースサイクルを繰り返しながら一気通貫で並走します。本質のコアを捉えながらクライアントのビジネス課題解決と、ユーザーの感情を揺さぶるプロダクトや施策へと作り上げていきます。アウトプット領域はWeb/iOS/Android/DTPなどデザインが必要な領域全てに及びます。',
  },
  {
    num: '02',
    copyEn: 'Build Branding.',
    copyJp: '事業のブランディング支援',
    lead:
      '企業の核となるミッションやビジョンやバリューを共に作り上げます。企業や事業がなぜ存在するのか？なぜその事業をやるのか？何をするのか？を共に戦略ベースで考え言語化・ビジュアル化します。',
    solution:
      '経営者や事業責任者とともに、戦略思考でミッション・ビジョン・バリューを考え事業や組織のコアを構築しブランディングしていきます。一貫したブランドの思想を言語化・可視化します。アウトプット領域は、ビジョン、ミッション、ロゴデザイン、プロダクトデザインなど多岐に渡ります。',
  },
]
