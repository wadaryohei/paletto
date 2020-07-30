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
import { Up } from '../../../../components/InViewMonitor'

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
    <Container>
      <Up>
        <Typography
          component={'h1'}
          variant={'heading'}
          className={'thinkHeading'}
        >
          {SectionHeadingDatas.sectionThink.heading}
        </Typography>
      </Up>

      <Up>
        <Typography
          component={'p'}
          variant={'subheading'}
          className={'thinkSubheading'}
        >
          {SectionHeadingDatas.sectionThink.subHeading}
        </Typography>
      </Up>

      <div className={'thinkCopyWrapper'}>
        <Up>
          <Typography
            component={'p'}
            variant={'copy'}
            size={'lg'}
            className={'thinkCopy'}
          >
            {SectionHeadingDatas.sectionThink.copy}
          </Typography>
        </Up>
      </div>

      <div className={'thinkLeadWrapper'}>
        <Up>
          <Typography component={'p'} variant={'lead'} colors={'white'}>
            <span>
              デザインは「課題解決」と「価値創造」の側面を持っています。
            </span>
            <span>
              プロダクトやサービス、人や組織では継続的なデザイン戦略のアプローチが必要となります。
            </span>
          </Typography>
        </Up>
        <Up>
          <Typography component={'p'} variant={'lead'} colors={'white'}>
            <span>
              パートナーとしてのデザイン戦略では、クライアントと同じ熱量での長期戦略を実施していく必要があるため、私達はサブスク型のサービスを提供しています。
            </span>
            <span>
              ご依頼されるパートナー様には「通常のパートナー依頼・サブスクリプションでのパートナー依頼」のいずれかをお選びになることが可能となっております。
            </span>
          </Typography>
        </Up>
      </div>
    </Container>

    <div className={'thinkCardWrapper'}>
      <Container>
        <Grid container spacing={4}>
          {ThinkDatas.map((ThinkData: Think, index: number) => {
            return (
              <Grid key={index} item md={4} xs={12} className={'thinkCardGrid'}>
                <Up>
                  <ThinkCard ThinkData={ThinkData} className={'thinkCard'} />
                </Up>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </div>
  </Section>
)
