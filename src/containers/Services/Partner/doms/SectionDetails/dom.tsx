import React from 'react'
import { Section } from '../../../../../components/Section'
import { Typography } from '../../../../../components/Typography'
import { Up } from '../../../../../components/InViewMonitor'

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
    <div className={'detailsSolution'}>
      <Up>
        <Typography component={'h2'} variant={'subheading'}>
          デザイン詳細
        </Typography>
      </Up>

      <Up>
        <Typography component={'p'} variant={'lead'}>
          サイト・アプリ(iOS・Android)デザイン / プロトタイプ制作 /
          Webコンサルティング・アクセス解析 / マーケティング戦略 / UXリサーチ /
          UI/UX改善 / 戦略構築 / 企業理念の策定 / ブランディング /
          コンテンツ企画・インタビュー制作
        </Typography>
      </Up>
    </div>
    <div className={'detailsSolution'}>
      <Up>
        <Typography component={'h2'} variant={'subheading'}>
          開発詳細
        </Typography>
      </Up>

      <Up>
        <Typography component={'p'} variant={'lead'}>
          企業サイト / 採用サイト / LP・キャンペーンサイト /
          スマートフォンサイト / オウンドメディア /
          CMS開発（WordPress/MicroCMS） / SPA開発 / JamStack開発 /
          Webサイト・サービス運用 / 予約システム開発 / チャットボット開発 /
          プロトタイプ開発
        </Typography>
      </Up>
    </div>
  </Section>
)
