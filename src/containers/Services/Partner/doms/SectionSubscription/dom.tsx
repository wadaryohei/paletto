import React from 'react'
import { Section } from '../../../../../components/Section'
import { Typography } from '../../../../../components/Typography'
import { LinkButton } from '../../../../../components/Button'

//----------------------------------
// props
//----------------------------------
export interface SectionSubscriptionProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const SectionSubscriptionComponent = (
  props: SectionSubscriptionProps,
) => (
  <Section className={props.className}>
    <div className={'subscriptionWrapper'}>
      <div className={'subscriptionHeaderWrapper'}>
        <Typography component={'h2'} variant={'heading'}>
          Subscription
        </Typography>
        <Typography component={'p'} variant={'subheading'}>
          サブスクリプションでのご依頼
        </Typography>
      </div>
      <div className={'subscriptionLeadWrapper'}>
        <Typography component={'p'} variant={'lead'}>
          格安でコストを下げて制作するためのサブスクリプションというわけではありません。
        </Typography>

        <Typography component={'p'} variant={'lead'}>
          一度きりの制作・納品するだけの制作会社に何百万円という金額で制作してもらったがそのまま運用も改善もされないまま終わってしまうということはよくあると思います。
        </Typography>

        <Typography component={'p'} variant={'lead'}>
          パートナーとしてのデザイン戦略では、クライアントと同じ熱量で長期戦略を実施していく必要があるため、私達はサブスク型のサービスで提供しています。
        </Typography>

        <Typography component={'p'} variant={'lead'}>
          時代の変化や日々の状況を考え、最適な戦略をクライアントと共に並走することで、デザインや開発による長期的なパートナーシップにより、本質を見極めた課題の解決へと全力へ進むことが可能になると考えています。
        </Typography>

        <Typography component={'p'} variant={'lead'}>
          長期的なパートナーシップによりビジネス課題の解決を実現する「戦略〜開発〜改善」のサイクルをワンストップで行うことができます。
        </Typography>
      </div>

      <div className={'subscriptionButtonWrapper'}>
        <LinkButton href={'/contact'} color={'primary'} size={'md'}>
          こちらから依頼する
        </LinkButton>
      </div>
    </div>
  </Section>
)
