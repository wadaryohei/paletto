import { RouteDatas } from '@/datas/RouteDatas'

export interface HeadType {
  top: {
    title: string
    description: string
    pathname: string
  }
  services: {
    title: string
    description: string
    pathname: string
  }
  servicesPartner: {
    title: string
    description: string
    pathname: string
  }
  members: {
    title: string
    description: string
    pathname: string
  }
  contact: {
    title: string
    description: string
    pathname: string
  }
  thanks: {
    title: string
    description: string
    pathname: string
  }
}

export const HeadDatas: HeadType = {
  top: {
    title: 'Paletto. パレット｜世界にエモーショナルなプロダクトを',
    description: '「Paletto.」では課題解決のその先の「事業やサービスやプロダクト」の思いをデザインでカタチにします。',
    pathname: RouteDatas.index.path,
  },
  services: {
    title: 'Services｜Paletto. パレット',
    description:
      'デジタルプロダクト開発（UI/UXデザイン）をベースに、既存事業の改善、新規事業立ち上げ、ブランド構築、デザイン組織支援といったあらゆるビジネス課題の解決を実現する事業です。',
    pathname: RouteDatas.services.path,
  },
  servicesPartner: {
    title: 'Partner｜Paletto. パレット',
    description:
      'デジタルプロダクト開発（UI/UXデザイン）をベースに、既存事業の改善、新規事業立ち上げ、ブランド構築、デザイン組織支援、そしてあらゆるビジネス課題の解決を実現する「戦略〜開発〜改善」のサイクルをワンストップでフルコミット・フルスクラッチで行う事業です。',
    pathname: RouteDatas.servicesPartner.path,
  },
  members: {
    title: 'Members｜Paletto. パレット',
    description: '数々の制作やサービスのグロースを経験してきたPalettoチームのメンバーです。',
    pathname: RouteDatas.members.path,
  },
  contact: {
    title: 'Contact｜Paletto. パレット',
    description: 'Palettoへのお問い合わせはこちらからお願いいたします。',
    pathname: RouteDatas.contact.path,
  },
  thanks: {
    title: 'Thanks｜Paletto. パレット',
    description: 'お問い合わせありがとうございます。2~3日以内にお返事致しますのでもうしばらくお待ちくださいませ。',
    pathname: RouteDatas.thanks.path,
  },
}
