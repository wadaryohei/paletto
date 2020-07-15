import React from 'react'
import { Box, Container, Grid } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done';
import { Section } from '../../components/Section'
import { Text } from '../../components/Text'
import { ServiceCard } from '../../components/ServiceCard'
import { Margin } from '../../const/Margin'
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

      <Box className={'visionWrapper'}>
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
      </Box>
    </Container>
  </Section>
)

/** @section Announce */
export const SectionAnnounceComponent = (props: SectionAnnounceProps) => (
  <Section className={props.className}>
    <Grid className={'announceWrapper'} container spacing={4}>
      <Grid item md={6} sm={12} xs={12}>
        <Text
          className={'announceHeading'}
          component={'h2'}
          textStyle={'accentheading'}
        >
          Approach.
        </Text>
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <Text component={'h2'} textStyle={'accentheading'}>
          当たり前のその先へ
        </Text>
        <Box mt={Margin.m32}>
          <Text className={'announceLead'} component={'p'} textStyle={'lead'}>
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
        </Box>
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
      <Box mt={Margin.m72}>
        <Text component={'p'} textStyle={'lead'}>
          <span>
            デジタル領域の課題に対して、システム開発、マーケティング、データ解析など一気通貫のデジタルコンサルティングサービスと、デジタルプロフェッショナルとプロジェクトをマッチングするプラットフォームを展開しています。
          </span>
        </Text>
      </Box>
    </Container>
    <Box className={'cardWrapper'} mt={Margin.m56}>
      <Grid container spacing={2} alignItems={'stretch'}>
        {ServicesDatas.map((ServicesData: Services, index: number) => {
          return (
            <Grid key={index} item md={6} xs={12}>
              <ServiceCard className={'card'} ServicesData={ServicesData} />
            </Grid>
          )
        })}
      </Grid>
    </Box>
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

      <Box mt={Margin.m72}>
        <Text component={'p'} textStyle={'subheading'}>
          なぜサブスクリプションなのか？
        </Text>
      </Box>

      <Box mt={Margin.m32}>
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
      </Box>

      <Box mt={Margin.m72}>
        <Grid container spacing={2}>
          {PartnerShipDatas.map(
            (PartnerShipData: PartnerShip, index: number) => {
              return (
                <Grid
                  className={'cardWrapper'}
                  key={index}
                  item
                  md={6}
                  sm={12}
                  xs={12}
                >
                  <Card className={'card'}>
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
                    <Box className={'planContentWrapper'}>
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
                      <Box component={'ul'} className={'planDetailWrapper'}>
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
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              )
            },
          )}
        </Grid>
      </Box>
    </Container>
  </Section>
)
