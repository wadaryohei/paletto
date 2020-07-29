import React from 'react'
import { Section } from '../../../../components/Section'
import { Typography } from '../../../../components/Typography'
import { LinkButton } from '../../../../components/Button'

//----------------------------------
// props
//----------------------------------
export interface SectionHeaderProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const SectionHeaderComponent = (props: SectionHeaderProps) => (
  <Section className={props.className}>
    <div className={'thanksHeaderWrapper'}>
      <Typography
        component={'h2'}
        variant={'heading'}
        className={'thanksHeader'}
      >
        Thanks
      </Typography>
      <Typography component={'p'} variant={'lead'}>
        <span>お問い合わせありがとうございます。</span>
        <span>
          2~3日以内にお返事致しますのでもうしばらくお待ちくださいませ。
        </span>
      </Typography>

      <Typography component={'p'} variant={'lead'} className={'thanksNote'}>
        ※2~3日経過しても返事が無い場合はお手数ですが再度ご連絡いただけますと幸いでございます。
      </Typography>

      <div className={'thanksButtonWrapper'}>
        <LinkButton href={'/'} routeMatch={false} size={'md'} color={'primary'}>
          TOPに戻る
        </LinkButton>
      </div>
    </div>
  </Section>
)
