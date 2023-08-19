import React from 'react'
import { Section } from '@/components/layouts/section'
import { Typography } from '@/components/elements/typography'
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
    <Up>
      <Typography component={'h2'} size={'md'} variant={'heading'} align={'center'} className={'servicesIntroHeader'}>
        We are design partners who change the world through design.
      </Typography>
    </Up>
    <Up>
      <Typography component={'p'} variant={'lead'}>
        <span>
          デジタルプロダクト開発（UI/UXデザイン）をベースに、既存事業の改善、新規事業立ち上げ、ブランド構築、デザイン組織支援、そしてあらゆるビジネス課題の解決を実現する「戦略〜開発〜改善」のサイクルをワンストップでフルコミット・フルスクラッチで行う事業です。
        </span>
      </Typography>
    </Up>
  </Section>
)
