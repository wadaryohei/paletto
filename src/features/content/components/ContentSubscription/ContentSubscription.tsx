import React from 'react'
import { Section } from '@/components/layouts/section'
import { LinkButton } from '@/components/elements/button'
import { More } from '@/components/elements/more'
import { Up } from '@/components/elements/inviewmonitor'

//----------------------------------
// props
//----------------------------------
export interface Props {
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const Index = (props: Props) => (
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
