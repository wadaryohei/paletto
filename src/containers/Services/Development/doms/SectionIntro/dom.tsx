import React from 'react'
import { Section } from '../../../../../components/Section'
import { Typography } from '../../../../../components/Typography'

//----------------------------------
// props
//----------------------------------
export interface SectionIntroProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const SectionIntroComponent = (props: SectionIntroProps) => (
  <Section className={props.className}>
    <Typography
      component={'h2'}
      variant={'heading'}
      className={'servicesIntroHeader'}
    >
      We are design partners who change the world through design.
    </Typography>
    <Typography component={'p'} variant={'lead'}>
      デジタルプロダクト開発（UI/UXデザイン）に強みを置き、既存事業の改善、新規事業立ち上げ、ブランド構築、デザイン組織支援、そしてあらゆるビジネス課題の解決を実現する「制作〜開発〜改善」のサイクルをワンストップでフルコミット・フルスクラッチで行う事業です。
    </Typography>
  </Section>
)
