import React from 'react'
import { Box, Container, Grid } from '@material-ui/core'
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

export interface SectionWhyEmotionalBgProps {
  className?: string
}

export interface SectionWhyEmotionalProps {
  className?: string
}

export interface SectionServiceProps {
  className?: string
}

export interface SectionPartnerShipProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------

/** @section Vision */
export const SectionVisionComponent = (props: SectionVisionProps) => (
  <Section className={props.className}>
    <Container>
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

/** @section Why Emotional Bg */
export const SectionWhyEmotionalBgComponent = (
  props: SectionWhyEmotionalBgProps,
) => (
  <Section className={props.className}>
    <Box className={'box'}>
      <Text component={'h2'} textStyle={'accentheading'}>
        Why Emotional
      </Text>
    </Box>
  </Section>
)

/** @section Why Emotional */
export const SectionWhyEmotionalComponent = (
  props: SectionWhyEmotionalProps,
) => (
  <Section
    className={props.className}
    style={{ backgroundImage: 'url(/whyemotional.png)' }}
  >
    <Container>
      <div>
        <Text component={'h2'} textStyle={'heading'}>
          Why Emotional
        </Text>
        <Text component={'p'} textStyle={'copy'}>
          感情をデザインするということ
        </Text>

        <Box mt={Margin.m72}>
          <Text component={'p'} textStyle={'subheading'}>
            なぜエモーショナルなのか？
          </Text>
          <Box mt={Margin.m40}>
            <Text component={'p'} textStyle={'lead'}>
              <span>
                デザインにおいて「課題解決」や「ユーザビリティ」が大事なのは明白です。
              </span>
              <span>
                ですが、そういったことが当たり前になりつつある世界ではどうでしょうか？
              </span>
              <span>それだけでは充分と言えません。</span>
              <span>
                また、人が物やサービスを使おうと思うのは何故でしょうか？
              </span>
              <span>そこには必ず「感情」が存在します。</span>
            </Text>
          </Box>
        </Box>

        <Box mt={Margin.m72}>
          <Text component={'p'} textStyle={'subheading'}>
            感情をデザインすること
          </Text>
          <Box mt={Margin.m40}>
            <Text component={'p'} textStyle={'lead'}>
              <span>人は「感情」に基づき行動する生き物です。</span>
              <span>感情が変われば、思考と行動が変わります。</span>
              <span>
                感情をデザインすることで、「人や組織、プロダクトやサービス」を最高のモノへと変えていくことが可能だと考えています。
              </span>
            </Text>
          </Box>
        </Box>
      </div>
    </Container>
  </Section>
)

/** @section Serivce */
export const SectionServiceComponent = (props: SectionServiceProps) => (
  <Section className={props.className}>
    <Container>
      <Text component={'h2'} textStyle={'heading'}>
        Serivces
      </Text>
      <Text component={'p'} textStyle={'copy'}>
        私達ができること
      </Text>
      <Box mt={Margin.m72}>
        <Text component={'p'} textStyle={'lead'}>
          <span>デザインから制作・運用までを一気貫通で担当いたします。</span>
          <span>
            デザインだけでなく、WordPressやJasmStackといった制作手法を用いた幅広い制作が可能です。
          </span>
        </Text>
      </Box>
    </Container>
    <Box className={'cardWrapper'} mt={Margin.m56}>
      {ServicesDatas.map((ServicesData: Services, index: number) => {
        return <ServiceCard key={index} ServicesData={ServicesData} />
      })}
    </Box>
  </Section>
)

/** @section Partner Ship */
export const SectionPartnerShipComponent = (props: SectionPartnerShipProps) => (
  <Section className={props.className}>
    <Container>
      <Text component={'h2'} textStyle={'heading'}>
        Partner Ship
      </Text>

      <Text component={'p'} textStyle={'copy'}>
        パートナーとデザインで<span className={'sp'}>未来を作る</span>
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
        <Grid container spacing={4}>
          {PartnerShipDatas.map((PartnerShipData: PartnerShip, index: number) => {
              return (
                <Grid key={index} item md={6} sm={12} xs={12}>
                  <Card>
                    <p>{PartnerShipData.planName}</p>
                    <p>こんな方におすすめ</p>
                    <p>{PartnerShipData.recommendedCopy}</p>
                    <p>
                      {PartnerShipData.monthlyFee}
                      <span>×</span>
                      {PartnerShipData.yearContract}ヶ月
                    </p>
                    {PartnerShipData.planDetails.map(
                      (planDetail, index: number) => {
                        return <p key={index}>{planDetail}</p>
                      },
                    )}
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
