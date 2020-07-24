import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { Section } from '../../../../components/Section'
import { Typography } from '../../../../components/Typography'
import { ThinkCard } from './ThinkCard'
import {
  SectionHeadingDatas,
  Think,
  ThinkDatas,
} from '../../../../datas/IndexDatas'

//----------------------------------
// props
//----------------------------------
export interface SectionThinkProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const SectionThinkComponent = (props: SectionThinkProps) => (
  <Section className={props.className}>
    <Container disableGutters={true}>
      <Typography
        component={'h2'}
        variant={'heading'}
        className={'thinkHeading'}
      >
        {SectionHeadingDatas.sectionThink.heading}
      </Typography>

      <Typography
        component={'h2'}
        variant={'subheading'}
        className={'thinkSubheading'}
      >
        {SectionHeadingDatas.sectionThink.subHeading}
      </Typography>

      <div className={'thinkCopyWrapper'}>
        <Typography component={'p'} variant={'copy'} className={'thinkCopy'}>
          {SectionHeadingDatas.sectionThink.copy}
        </Typography>
      </div>

      <div className={'thinkLeadWrapper'}>
        <Typography component={'p'} variant={'lead'}>
          <span>
            デザインは「課題解決」と「価値創造」の側面を持っています。
          </span>
          <span>
            プロダクトやサービス、人や組織では継続的なデザイン戦略のアプローチが必要となります。
          </span>
        </Typography>
        <Typography component={'p'} variant={'lead'}>
          <span>
            そういったパートナーとしてのデザイン戦略では、クライアントと同じ熱量での長期戦略を作り実施していく必要があるため、私達はサブスク型のサービスを提供しています。
          </span>
          <span>
            制作・納品するだけの制作会社が何十万円、何百万円という金額で制作する中、私達はサブスクという形式にすることで長期的なデザイン戦略を実現します。
          </span>
        </Typography>
      </div>
    </Container>

    <div className={'thinkCardWrapper'}>
      <Grid container spacing={4}>
        {ThinkDatas.map((ThinkData: Think, index: number) => {
          return (
            <Grid key={index} item md={4} xs={12} className={'thinkCardGrid'}>
              <ThinkCard ThinkData={ThinkData} className={'thinkCard'} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  </Section>
)
