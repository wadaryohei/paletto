import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { Section } from '../../../../components/Section'
import { Text } from '../../../../components/Text'
import { ServiceCard } from './ServiceCard'
import {
  Services,
  ServicesDatas,
  SectionHeadingDatas,
} from '../../../../datas/IndexDatas'

//----------------------------------
// props
//----------------------------------
export interface SectionServiceProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const SectionServiceComponent = (props: SectionServiceProps) => (
  <Section className={props.className}>
    <Container>
      <Text component={'h2'} textStyle={'heading'}>
        {SectionHeadingDatas.sectionService.heading}
      </Text>
      <Text component={'p'} textStyle={'subheading'}>
        {SectionHeadingDatas.sectionService.subHeading}
      </Text>

      <div className={'serviceLeadWrapper'}>
        <Text component={'p'} textStyle={'copy'}>
          {SectionHeadingDatas.sectionService.copy}
        </Text>
        <Text component={'p'} textStyle={'lead'}>
          <span>感情をデザインする上でビジネス課題の解決は勿論必要です。</span>
          <span>
            「Paletto.」が手掛けるデザインは、見た目を整えるだけのデザインではありません。
          </span>
          <span>
            本来デザインが持つ「設計」にイチから取り組み、ビジネスにおける課題を解決し、それがユーザーの感情を動かすことです。
          </span>
        </Text>
        <Text component={'p'} textStyle={'lead'}>
          <span>
            「Paletto.」ではデジタル領域の課題に対して、Webサイト/サービス、アプリの企画・制作、CI・VI構築や、各種分析・改善活動を、
          </span>
          <span>
            クライアントや事業パートナーのビジネスの成長の支援を「デザイン、制作・運用・保守」まで多岐にわたるサポートを行います。
          </span>
        </Text>
      </div>
    </Container>

    <div className={'serviceCardWrapper'}>
      <Grid container spacing={4}>
        {ServicesDatas.map((ServicesData: Services, index: number) => {
          return (
            <Grid key={index} item md={4} xs={12}>
              <ServiceCard
                ServicesData={ServicesData}
                className={'serviceCard'}
              />
            </Grid>
          )
        })}
      </Grid>
    </div>
  </Section>
)
