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
          <span>
            Palettoが手掛けるデザインは、見た目を整えるだけのデザインではありません。
          </span>
          <span>
            本来デザインが持つ「設計」にイチから取り組み、ビジネスにおける課題を解決し、それがユーザーの感情を動かすことです。
          </span>
          <span>
            その上でデジタル領域の課題に対して、「デザイン、制作・運用・保守」まで多岐にわたるサポートを行います。
          </span>
        </Text>
      </div>
    </Container>

    <div className={'serviceCardWrapper'}>
      <Grid container spacing={2}>
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
