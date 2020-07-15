import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { Section } from '../../../../components/Section'
import { Text } from '../../../../components/Text'
import { ServiceCard } from '../../../../components/ServiceCard'
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
    <Container maxWidth={'md'}>
      <Text component={'h2'} textStyle={'heading'}>
        {SectionHeadingDatas.sectionService.headingEn}
      </Text>
      <Text component={'p'} textStyle={'copy'}>
        {SectionHeadingDatas.sectionService.headingJp}
      </Text>
      <div className={'serviceLeadWrapper'}>
        <Text component={'p'} textStyle={'lead'}>
          <span>
            デジタル領域の課題に対して、システム開発、マーケティング、データ解析など一気通貫のデジタルコンサルティングサービスと、デジタルプロフェッショナルとプロジェクトをマッチングするプラットフォームを展開しています。
          </span>
        </Text>
      </div>
    </Container>

    <div className={'serviceCardWrapper'}>
      <Grid container spacing={2} alignItems={'stretch'}>
        {ServicesDatas.map((ServicesData: Services, index: number) => {
          return (
            <Grid key={index} item md={6} xs={12}>
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
