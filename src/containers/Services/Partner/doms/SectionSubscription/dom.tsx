import React from 'react'
import { Section } from '../../../../../components/Section'
import { LinkButton } from '../../../../../components/Button'
import { More } from '../../../../../components/More'
import { Up } from '../../../../../components/InViewMonitor'

//----------------------------------
// props
//----------------------------------
export interface SectionSubscriptionProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const SectionSubscriptionComponent = (props: SectionSubscriptionProps) => (
  <Section className={props.className}>
    <div className={'subscriptionWrapper'}>
      <div className={'subscriptionButtonWrapper'}>
        <Up>
          <LinkButton href={'/contact'} color={'primary'} size={'md'}>
            <More>こちらから依頼する</More>
          </LinkButton>
        </Up>
      </div>
    </div>
  </Section>
)
