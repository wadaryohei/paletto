//----------------------------------
// ServicesDesignPartners
//----------------------------------
export interface ServicesDesignPartnersType {
  num: string
  copyEn: string
  copyJp: string
  lead: string
}

export const ServicesDesignPartnersDatas: ServicesDesignPartnersType[] = [
  {
    num: '01',
    copyEn: 'Find out the essence.',
    copyJp: '本質を見極める',
    lead:
      '「ドリルを買いにきた人が欲しいのはドリルではなく『穴』である」という言葉があるように、物事の本質を見極めたデザインに取り組みます。',
  },
  {
    num: '02',
    copyEn: 'Strike a chord.',
    copyJp: '共感を呼ぶ',
    lead: '使ってくれるユーザーへの理解、ユーザーの気持ちを昂ぶらせる世界観の構築・体験を考え、共感を呼ぶデザインに取り組みます。',
  },
  {
    num: '03',
    copyEn: 'Moved Emotions.',
    copyJp: '感情を揺さぶる',
    lead:
      'プロダクトやサービスに触れたユーザーが何を思い、何を感じるのかを考え、サービス・プロダクトのファンになるような感情を揺さぶるデザインに取り組みます。',
  },
]

//----------------------------------
// ServicesDesignSolutionDatas
//----------------------------------
export interface ServicesDesignSolutionType {
  num: string
  copyEn: string
  copyJp: string
  lead: string
  solution: string
}

export const ServicesDesignSolutionDatas: ServicesDesignSolutionType[] = [
  {
    num: '01',
    copyEn: 'Glow up.',
    copyJp: '事業のグロース支援',
    lead:
      '「Paletto.」では新規事業・既存事業関係無く事業のグロース支援を行います。経営者または事業責任者、内外のエンジニアやデザイナーと共にチームビルディングを行い、「戦略から戦術」を考え、プロダクト/サービスの開発、グロースまでを担当します。',
    solution:
      '「戦略〜開発〜改善」のサイクルをまわしながら一気通貫の開発・デザインを行います。本質を捉えたビジネス課題解決と、ユーザーの感情を揺さぶるプロダクトや施策へと作り上げていきます。',
  },
]
