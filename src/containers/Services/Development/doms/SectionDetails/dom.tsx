import React from 'react'
import { Section } from '../../../../../components/Section'
import { Typography } from '../../../../../components/Typography'

//----------------------------------
// props
//----------------------------------
export interface SectionDetailsProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const SectionDetailsComponent = (props: SectionDetailsProps) => (
  <Section className={props.className}>
    <Typography component={'h2'} variant={'subheading'}>
      デザイン戦略詳細
    </Typography>
    <Typography component={'p'} variant={'lead'}>
      サイト・アプリ(iOS・Android)デザイン制作 /
      Webコンサルティング・アクセス解析 / プロトタイプ制作・開発 /
      マーケティング戦略 / UXリサーチ / UI/UX改善 / 戦略構築 / 企業理念の策定 /
      ブランディング コンテンツ企画・インタビュー制作 / その他
    </Typography>
  </Section>
)
