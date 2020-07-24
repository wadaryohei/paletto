import React from 'react'
import { PagesServicesLayout } from '../../../components/_shared/PagesServicesLayout'
import { ServicesDesignDatas } from '../../../datas/ServicesDatas'
import { Section } from '../../../components/Section'
import { Typography } from '../../../components/Typography'
import { Banner } from '../../../components/Banner'
import { Link } from '../../../components/Link'

//----------------------------------
// props
//----------------------------------
export interface ServicesDesignProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
const ServicesDesignContainer = (props: ServicesDesignProps) => {
  //----------------------------------
  // render
  //----------------------------------
  return (
    <PagesServicesLayout
      className={props.className}
      pageHeaderBgPathname={ServicesDesignDatas.bgPathName}
      pageHeading={ServicesDesignDatas.heading}
      pageSubHeading={ServicesDesignDatas.subHeading}
    >
      {/** @section ServicesDesign */}
      <Section className={'l-services-design'}>
        <div className={'servicesDesignWrapper'}>
          <Typography
            component={'h2'}
            variant={'heading'}
            className={'servicesDesignHeader'}
          >
            We are design partners who change the world through design.
          </Typography>
          <Typography component={'p'} variant={'lead'}>
            デジタルプロダクト開発（UI/UXデザイン）に強みを置き、既存事業の改善、新規事業立ち上げ、ブランド構築、デザイン組織支援、そしてあらゆるビジネス課題の解決を実現する「制作〜開発〜改善」のサイクルをワンストップでフルコミット・フルスクラッチで行う事業です。
          </Typography>

          <div className={'servicesDesignEssence'}>
            <Typography
              component={'h2'}
              variant={'heading'}
              className={'servicesDesignEssenceHeading'}
            >
              Initiatives with partners.
            </Typography>
            <Typography component={'p'} variant={'subheading'}>
              パートナーとの取り組み方
            </Typography>

            <ul className={'servicesDesignEssenceList'}>
              <li>
                <span className={'servicesDesignEssenceListNum'}>01.</span>
                <div className={'servicesDesignEssenceListWrapper'}>
                  <Typography
                    component={'h2'}
                    variant={'heading'}
                    className={'servicesDesignEssenceListHeading'}
                  >
                    Having ownership.
                  </Typography>
                  <Typography
                    component={'p'}
                    variant={'lead'}
                    className={'servicesDesignEssenceListSubHeading'}
                  >
                    オーナーシップを持つ
                  </Typography>
                  <Typography
                    component={'p'}
                    variant={'lead'}
                    className={'servicesDesignEssenceListLead'}
                  >
                    クライアントのビジネスをしっかりと理解し、同じ熱量を持って、まるでチームに最高のデザイナーがいるような最高のパートナーデザインに取り組みます。
                  </Typography>
                </div>
              </li>

              <li>
                <span className={'servicesDesignEssenceListNum'}>02.</span>
                <div className={'servicesDesignEssenceListWrapper'}>
                  <Typography
                    component={'h2'}
                    variant={'heading'}
                    className={'servicesDesignEssenceListHeading'}
                  >
                    Find out the essence.
                  </Typography>
                  <Typography
                    component={'p'}
                    variant={'lead'}
                    className={'servicesDesignEssenceListSubHeading'}
                  >
                    本質を見極める
                  </Typography>
                  <Typography
                    component={'p'}
                    variant={'lead'}
                    className={'servicesDesignEssenceListLead'}
                  >
                    「ドリルを買いにきた人が欲しいのはドリルではなく『穴』である」という言葉があるように、物事のコアである本質を見極め、極限まで突き詰めることで本質を突いたデザインに取り組みます。
                  </Typography>
                </div>
              </li>

              <li>
                <span className={'servicesDesignEssenceListNum'}>03.</span>
                <div className={'servicesDesignEssenceListWrapper'}>
                  <Typography
                    component={'h2'}
                    variant={'heading'}
                    className={'servicesDesignEssenceListHeading'}
                  >
                    Strike a chord.
                  </Typography>
                  <Typography
                    component={'p'}
                    variant={'lead'}
                    className={'servicesDesignEssenceListSubHeading'}
                  >
                    共感を呼ぶ
                  </Typography>
                  <Typography
                    component={'p'}
                    variant={'lead'}
                    className={'servicesDesignEssenceListLead'}
                  >
                    使ってくれるユーザーを理解し、ユーザーがどのように行動するのか、身体的および感情的なニーズは何か、世界をどのように考えているのかなどユーザーを理解することで共感を呼ぶデザインに取り組みます。
                  </Typography>
                </div>
              </li>

              <li>
                <span className={'servicesDesignEssenceListNum'}>04.</span>
                <div className={'servicesDesignEssenceListWrapper'}>
                  <Typography
                    component={'h2'}
                    variant={'heading'}
                    className={'servicesDesignEssenceListHeading'}
                  >
                    Moved Emotions.
                  </Typography>
                  <Typography
                    component={'p'}
                    variant={'lead'}
                    className={'servicesDesignEssenceListSubHeading'}
                  >
                    感情を揺さぶる
                  </Typography>
                  <Typography
                    component={'p'}
                    variant={'lead'}
                    className={'servicesDesignEssenceListLead'}
                  >
                    デザインされたプロダクトやサービスに触れたユーザーが何を思い、何を感じるのかまでを考えます。ユーザーにとっての最高の体験を突き詰めることで熱狂的なファンになるような感情を揺さぶるデザインに取り組みます。
                  </Typography>
                </div>
              </li>
            </ul>
          </div>

          <div className={'servicesDesignEssence'}>
            <Typography
              component={'h2'}
              variant={'heading'}
              className={'servicesDesignEssenceHeading'}
            >
              What we can do as partners.
            </Typography>
            <Typography component={'p'} variant={'subheading'}>
              私達がパートナーとしてできること
            </Typography>

            <ul className={'servicesDesignEssenceList'}>
              <li>
                <span className={'servicesDesignEssenceListNum'}>01.</span>
                <div className={'servicesDesignEssenceListWrapper'}>
                  <Typography
                    component={'h2'}
                    variant={'heading'}
                    className={'servicesDesignEssenceListHeading'}
                  >
                    Glow up.
                  </Typography>
                  <Typography
                    component={'p'}
                    variant={'lead'}
                    className={'servicesDesignEssenceListSubHeading'}
                  >
                    事業のグロース支援
                  </Typography>
                  <Typography
                    component={'p'}
                    variant={'lead'}
                    className={'servicesDesignEssenceListLead'}
                  >
                    「Paletto.」では新規事業・既存事業など関係無く事業のグロース支援を行います。
                    <span>
                      経営者または事業責任者と共にチームを組みデザインパートナーとして事業のコアとなる戦略を共に考え、クライアントチームのデザイナーやエンジニアとチームになりプロダクトの開発、グロースまでを長期的にコミットし続けます。
                    </span>
                  </Typography>

                  <Typography
                    component={'h2'}
                    variant={'subheading'}
                    className={'servicesDesignEssenceListDescription'}
                  >
                    Design Solution.
                  </Typography>
                  <Typography
                    component={'p'}
                    variant={'lead'}
                    className={'servicesDesignEssenceListNotes'}
                  >
                    新規事業立ち上げや既存プロダクトのUI/UX改善など、戦略策定、プロダクト開発、さらにグロースフェーズまで一気通貫で並走します。ユーザー視点とビジネスへの貢献、どちらも欠けることのない直感的で使いやすいインターフェイスを実現します。アウトプットはWeb/iOS/Android/IoTなど多岐に渡ります。
                  </Typography>
                </div>
              </li>

              <li>
                <span className={'servicesDesignEssenceListNum'}>02.</span>
                <div className={'servicesDesignEssenceListWrapper'}>
                  <Typography
                    component={'h2'}
                    variant={'heading'}
                    className={'servicesDesignEssenceListHeading'}
                  >
                    Build Branding.
                  </Typography>
                  <Typography
                    component={'p'}
                    variant={'lead'}
                    className={'servicesDesignEssenceListSubHeading'}
                  >
                    事業のブランディング支援
                  </Typography>
                  <Typography
                    component={'p'}
                    variant={'lead'}
                    className={'servicesDesignEssenceListLead'}
                  >
                    企業の核となるミッションやビジョンやバリューを共に作り上げます。
                    <span>
                      企業や事業がなぜ存在するのか？なぜその事業をやるのか？何をするのか？を共に戦略ベースで考え言語化・ビジュアル化します。
                    </span>
                  </Typography>

                  <Typography
                    component={'h2'}
                    variant={'subheading'}
                    className={'servicesDesignEssenceListDescription'}
                  >
                    Design Solution.
                  </Typography>
                  <Typography
                    component={'p'}
                    variant={'lead'}
                    className={'servicesDesignEssenceListNotes'}
                  >
                    戦略思考でビジョンを描き、ブランドのコアを内側からデザインします。企業や事業の成り立ち、原体験を紐解き、事業・業界・社会的文脈などを一貫したブランドの思想として言語化・可視化します。アウトプットは、ビジョン、ミッション、ロゴデザイン、プロダクトデザインなど多岐に渡ります。
                  </Typography>
                </div>
              </li>
            </ul>
          </div>

          <div className={'servicesDesignDetails'}>
            <Typography component={'h2'} variant={'subheading'}>
              デザイン戦略詳細
            </Typography>
            <Typography component={'p'} variant={'lead'}>
              サイト・アプリ(iOS・Android)デザイン制作 /
              Webコンサルティング・アクセス解析 / プロトタイプ制作・開発 /
              マーケティング戦略 / UXリサーチ / UI/UX改善 / 戦略構築 /
              企業理念の策定 / ブランディング コンテンツ企画・インタビュー制作 /
              その他
            </Typography>
          </div>

          <div className={'servicesDesignLinkWrapper'}>
            <Link href={'/services/development'} routeMatch={false}>
              <Banner imgPath={'/pages/services/development.jpg'}>
                <span className={'servicesLinkCopy'}>制作パートナー事業へ</span>
                <span className={'servicesLinkHeading'}>SERVICES</span>
              </Banner>
            </Link>
          </div>
        </div>
      </Section>
    </PagesServicesLayout>
  )
}

export default ServicesDesignContainer
