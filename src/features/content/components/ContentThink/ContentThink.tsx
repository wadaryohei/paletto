import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { Section } from '@/components/layouts/section'
import * as Card from '@/features/card/components/Index'
import { Typography } from '@/components/elements/typography'
import { Up } from '@/components/elements/inviewmonitor'
import { ThinkCardDatas, ThinkCardType } from '@/datas/CardDatas'

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
    <Container>
      <Up>
        <Typography component={'h1'} variant={'heading'} className={'thinkHeading'}>
          OUR THINK.
        </Typography>
      </Up>

      <Up>
        <Typography component={'p'} variant={'subheading'} className={'thinkSubheading'}>
          私達の考え
        </Typography>
      </Up>

      <div className={'thinkCopyWrapper'}>
        <Up>
          <Typography component={'p'} variant={'copy'} size={'lg'} className={'thinkCopy'}>
            サブスクリプションを採用
          </Typography>
        </Up>
      </div>

      <div className={'thinkLeadWrapper'}>
        <Up>
          <Typography component={'p'} variant={'lead'} colors={'white'}>
            <span>プロダクト開発は「課題解決」と「価値創造」の側面を持っています。</span>
            <span>プロダクト開発の文化を組織にインストールするには、継続的なデザイン戦略と開発のアプローチ両方が必要となります。</span>
            <span>
              そのためパートナーとして、クライアントと同じ熱量での長期戦略を実施していく必要があるため、私達はサブスク型のサービスをメインに提供しています。
            </span>
            <span>
              ご依頼されるパートナー様には「単発のパートナー依頼・サブスクリプションでのパートナー依頼」のいずれかをお選びになることが可能となっております。
            </span>
          </Typography>
        </Up>
      </div>
    </Container>

    <div className={'thinkCardWrapper'}>
      <Container>
        <Grid container spacing={4}>
          {ThinkCardDatas.map((ThinkCardData: ThinkCardType, index: number) => {
            return (
              <Grid key={index} item md={4} xs={12} className={'thinkCardGrid'}>
                <Up>
                  <Card.ThinkCard ThinkCardData={ThinkCardData} className={'thinkCard'} />
                </Up>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </div>
  </Section>
)
