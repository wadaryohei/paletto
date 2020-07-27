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
        <Typography
          component={'h2'}
          variant={'heading'}
          className={'subscriptionHeader'}
        >
          Standard / Subscription
        </Typography>
        <Typography
          component={'p'}
          variant={'subheading'}
          className={'subscriptionSubheading'}
        >
          通常のパートナー依頼 / サブスクリプションでのパートナー依頼
        </Typography>
      </div>
      <div className={'subscriptionLeadWrapper'}>
        <div className={'subscriptionSubheadingWrapper'}>
          <Typography
            component={'h3'}
            variant={'subheading'}
            className={'subscriptionSubheading'}
          >
            ご依頼について
          </Typography>
        </div>

        <Typography component={'p'} variant={'lead'}>
          私達は「デザイン・開発パートナーシップ」として事業のグロース支援や事業のブランディング支援を行なっています。
        </Typography>

        <Typography component={'p'} variant={'lead'}>
          通常のデザイン会社/制作会社と同じ形式でのご依頼も承っていますが、他にもう一点ご依頼のタイプに「サブスクリプションでのパートナー依頼」を導入しています。
        </Typography>
        <Typography component={'p'} variant={'lead'}>
          ご依頼されるパートナー様には「通常のパートナー依頼・サブスクリプションでのパートナー依頼」のいずれかをお選びになることが可能となっております。
        </Typography>

        <div className={'subscriptionSubheadingWrapper'}>
          <Typography component={'h3'} variant={'subheading'}>
            なぜサブスクリプションなのか？
          </Typography>
        </div>

        <Typography component={'p'} variant={'lead'}>
          格安でコストを下げて制作するためのサブスクリプションというわけではありません。
        </Typography>

        <Typography component={'p'} variant={'lead'}>
          パートナーとしてのデザイン戦略では、クライアントと同じ熱量で長期戦略を実施していく必要があるため、私達はサブスクリプションでのサービスで提供しています。
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
