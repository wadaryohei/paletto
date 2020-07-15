import React from 'react'
import { Container, Grid } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'
import { Section } from '../../components/Section'
import { Text } from '../../components/Text'
import { ServiceCard } from '../../components/ServiceCard'
import {
  Services,
  ServicesDatas,
  PartnerShip,
  PartnerShipDatas,
} from '../../datas/IndexDatas'
import { Card } from '../../components/Card'

//----------------------------------
// props
//----------------------------------
export interface SectionVisionProps {
  className?: string
}

export interface SectionAnnounceProps {
  className?: string
}

export interface SectionServiceProps {
  className?: string
}

export interface SectionPlansProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------

/** @section Vision */
export const SectionVisionComponent = (props: SectionVisionProps) => (
  <Section className={props.className}>
    <Container maxWidth={'md'}>
      <Text component={'h2'} textStyle={'heading'}>
        Vision
      </Text>
      <Text component={'p'} textStyle={'copy'}>
        感情を動かすデザインを
      </Text>

      <div className={'visionLeadWrapper'}>
        <Text component={'p'} textStyle={'lead'}>
          <span>人の感情に寄り添い、人の感情をデザインする。</span>
          <span>
            そんな「エモーショナルなデザイン」をすることが私達のVisionです。
          </span>
          <span>感情を揺さぶるデザインでこそ、人の心は動きます。</span>
          <span>
            「Paletto.」では課題の解決だけでなく、事業やサービスやプロダクトの思いをデザインでカタチにします。
          </span>
        </Text>
      </div>
    </Container>
  </Section>
)

/** @section Announce */
export const SectionAnnounceComponent = (props: SectionAnnounceProps) => (
  <Section className={props.className}>
    <Grid container spacing={4} className={'announceWrapper'}>
      <Grid item md={6} sm={12} xs={12}>
        <Text
          component={'h2'}
          textStyle={'accentheading'}
          className={'announceHeading'}
        >
          Approach.
        </Text>
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <Text component={'h2'} textStyle={'accentheading'}>
          当たり前のその先へ
        </Text>
        <div className={'annouceLeadWrapper'}>
          <Text component={'p'} textStyle={'lead'} className={'announceLead'}>
            <span>
              ビジネス的なゴールや課題解決はもはや当たり前の時代になりました。
            </span>
            <span>
              私達は「当たり前のその先」にあるユーザーの感情を動かすデザインに取り組みます。
            </span>
            <span>
              このプロダクト、このお店、このサービスだからこそ使いたいと思えるデザインを作っていきます。
            </span>
          </Text>
        </div>
      </Grid>
    </Grid>
  </Section>
)

/** @section Serivce */
export const SectionServiceComponent = (props: SectionServiceProps) => (
  <Section className={props.className}>
    <Container maxWidth={'md'}>
      <Text component={'h2'} textStyle={'heading'}>
        Serivces
      </Text>
      <Text component={'p'} textStyle={'copy'}>
        私達ができること
      </Text>
      <div className={'serviceLeadWrapper'}>
        <Text component={'p'} textStyle={'lead'}>
          <span>
            デジタル領域の課題に対して、システム開発、マーケティング、データ解析など一気通貫のデジタルコンサルティングサービスと、デジタルプロフェッショナルとプロジェクトをマッチングするプラットフォームを展開しています。
          </span>
        </Text>
      </div>
    </Container>

    <div className={'serviceCardWrapper'}>
      <Grid container spacing={2} alignItems={'stretch'}>
        {ServicesDatas.map((ServicesData: Services, index: number) => {
          return (
            <Grid key={index} item md={6} xs={12}>
              <ServiceCard
                ServicesData={ServicesData}
                className={'serviceCard'}
              />
            </Grid>
          )
        })}
      </Grid>
    </div>
  </Section>
)

/** @section Plans */
export const SectionPlansComponent = (props: SectionPlansProps) => (
  <Section className={props.className}>
    <Container maxWidth={'md'}>
      <Text component={'h2'} textStyle={'heading'}>
        Plans
      </Text>

      <Text component={'p'} textStyle={'copy'}>
        パートナーとデザインで未来を作る
      </Text>

      <div className={'plansSubHeadingWrapper'}>
        <Text component={'p'} textStyle={'subheading'}>
          なぜサブスクリプションなのか？
        </Text>
      </div>

      <div className={'plansLeadWrapper'}>
        <Text component={'p'} textStyle={'lead'}>
          <span>
            デザインは「課題解決」と「価値創造」の側面を持っています。
          </span>
          <span>
            人も組織、プロダクトやサービスも継続的なデザインへのアプローチが必要となります。
          </span>
          <span>
            そういったパートナーとしてのデザイン戦略では、2人3脚での長期戦略を作り上げ実施していく必要があり、私達はサブスク型のサービスを提供しています。
          </span>
          <span>
            納品するだけの制作会社が何十万という金額で制作する中、私達はデザインのパワーをサブスクという形式で最大限発揮していきます。
          </span>
        </Text>
      </div>

      <div className={'plansCardWrapper'}>
        <Grid container spacing={2}>
          {PartnerShipDatas.map(
            (PartnerShipData: PartnerShip, index: number) => {
              return (
                <Grid key={index} item md={6} sm={12} xs={12}>
                  <Card className={'plansCard'}>
                    <p className={'planContract'}>
                      <span>サブスクリプション契約</span>
                    </p>
                    <p className={'planName'}>{PartnerShipData.planName}</p>
                    <Text
                      className={'planRecommended'}
                      component={'p'}
                      textStyle={'subheading'}
                    >
                      こんな方におすすめ
                    </Text>
                    <p className={'planRecommendedCopy'}>
                      {PartnerShipData.recommendedCopy}
                    </p>
                    <div className={'planContentWrapper'}>
                      <p className={'planSubscription'}>
                        <span className={'planNum'}>
                          {PartnerShipData.monthlyFee}
                        </span>
                        <span className={'planFee'}>万円</span>
                        <span className={'planMultiplication'}>×</span>
                        <span className={'planNum'}>
                          {PartnerShipData.yearContract}
                        </span>
                        <span className={'planMonth'}>ヶ月</span>
                      </p>
                      <ul className={'planDetailWrapper'}>
                        {PartnerShipData.planDetails.map(
                          (planDetail, index: number) => {
                            return (
                              <li className={'planDetailList'} key={index}>
                                <DoneIcon className={'planDetailListIcon'} />
                                {planDetail}
                              </li>
                            )
                          },
                        )}
                      </ul>
                    </div>
                  </Card>
                </Grid>
              )
            },
          )}
        </Grid>
      </div>
    </Container>
  </Section>
)
