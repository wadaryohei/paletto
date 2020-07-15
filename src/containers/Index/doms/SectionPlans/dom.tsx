import React from 'react'
import { Grid, Container } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'
import { Section } from '../../../../components/Section'
import { Text } from '../../../../components/Text'
import { Card } from '../../../../components/Card'
import { Plan, PlanDatas } from '../../../../datas/IndexDatas'

//----------------------------------
// props
//----------------------------------
export interface SectionPlansProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
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
          {PlanDatas.map((PlanData: Plan, index: number) => {
            return (
              <Grid key={index} item md={6} sm={12} xs={12}>
                <Card className={'plansCard'}>
                  <p className={'planContract'}>
                    <span>サブスクリプション契約</span>
                  </p>
                  <p className={'planName'}>{PlanData.planName}</p>
                  <Text
                    className={'planRecommended'}
                    component={'p'}
                    textStyle={'subheading'}
                  >
                    こんな方におすすめ
                  </Text>
                  <p className={'planRecommendedCopy'}>
                    {PlanData.recommendedCopy}
                  </p>
                  <div className={'planContentWrapper'}>
                    <p className={'planSubscription'}>
                      <span className={'planNum'}>{PlanData.monthlyFee}</span>
                      <span className={'planFee'}>万円</span>
                      <span className={'planMultiplication'}>×</span>
                      <span className={'planNum'}>{PlanData.yearContract}</span>
                      <span className={'planMonth'}>ヶ月</span>
                    </p>
                    <ul className={'planDetailWrapper'}>
                      {PlanData.planDetails.map((planDetail, index: number) => {
                        return (
                          <li className={'planDetailList'} key={index}>
                            <DoneIcon className={'planDetailListIcon'} />
                            {planDetail}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </Container>
  </Section>
)
