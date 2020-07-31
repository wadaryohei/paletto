import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { Section } from '../../../../components/Section'
import { Typography } from '../../../../components/Typography'
import { LinkButton } from '../../../../components/Button'
import { More } from '../../../../components/More'
import { ServiceCard } from './ServiceCard'
import { SectionHeadingDatas } from '../../../../datas/IndexDatas'
import {
  Services,
  ServicesDatas,
} from '../../../../datas/_shared/ServicesDatas'
import { Up } from '../../../../components/InViewMonitor'

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
      <Up>
        <Typography component={'h1'} variant={'heading'}>
          {SectionHeadingDatas.sectionService.heading}
        </Typography>
      </Up>
      <Up>
        <Typography component={'p'} variant={'subheading'}>
          {SectionHeadingDatas.sectionService.subHeading}
        </Typography>
      </Up>
      <div className={'serviceLeadWrapper'}>
        <Up>
          <Typography component={'p'} variant={'copy'}>
            {SectionHeadingDatas.sectionService.copy}
          </Typography>
        </Up>
        <div className={'serviceLeadInWrapper'}>
          <Up>
            <Typography component={'p'} variant={'lead'}>
              <span>
                感情をデザインする上でビジネス課題の解決は勿論必要です。
              </span>
              <span>
                「Paletto.」が手掛けるデザインは、見た目を整えるだけのデザインではありません。
              </span>
              <span>
                本来デザインが持つ「設計」にイチから取り組み、ビジネスにおける課題を解決し、それがユーザーの感情を動かすことです。
              </span>
            </Typography>
            <Typography component={'p'} variant={'lead'}>
              <span>
                「Paletto.」ではデジタル領域の課題に対して、Webサイト/サービス、アプリの企画・制作、各種分析・改善活動を、
              </span>
              <span>
                クライアントや事業パートナーのビジネスの成長の支援を「デザイン、制作・運用・保守」まで多岐にわたるサポートを行います。
              </span>
            </Typography>
          </Up>
        </div>
      </div>
    </Container>

    <div className={'serviceCardWrapper'}>
      <Container>
        <Grid container spacing={4}>
          {ServicesDatas.map((ServicesData: Services, index: number) => {
            return (
              <Grid
                key={index}
                item
                md={8}
                xs={12}
                className={'serviceCardGrid'}
              >
                <Up>
                  <ServiceCard
                    ServicesData={ServicesData}
                    className={'serviceCard'}
                  />
                </Up>
              </Grid>
            )
          })}
        </Grid>

        <Up>
          <div className={'servicesButtonWrapper'}>
            <LinkButton href={'/services'} color={'primary'} size={'md'}>
              <More>View More</More>
            </LinkButton>
          </div>
        </Up>
      </Container>
    </div>
  </Section>
)
