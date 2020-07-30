import React from 'react'
import { Section } from '../../../../../components/Section'
import { Typography } from '../../../../../components/Typography'

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
    <div className={'contactHeaderWrapper'}>
      <Typography component={'h2'} variant={'heading'} size={'md'}>
        Contact
      </Typography>
      <Typography component={'p'} variant={'lead'}>
        パートナー様のお問い合わせをお待ちしております。
      </Typography>
    </div>
  </Section>
)
