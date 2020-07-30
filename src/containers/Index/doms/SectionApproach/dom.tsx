import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { Section } from '../../../../components/Section'
import { Typography } from '../../../../components/Typography'
import { SectionHeadingDatas } from '../../../../datas/IndexDatas'
import { Up } from '../../../../components/InViewMonitor'

//----------------------------------
// props
//----------------------------------
export interface SectionApproachProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const SectionApproachComponent = (props: SectionApproachProps) => (
  <Section className={props.className}>
    <Container>
      <Grid container spacing={4} className={'approachWrapper'}>
        <Grid item md={6} sm={12} xs={12}>
          <Up>
            <Typography
              component={'h1'}
              variant={'heading'}
              colors={'white'}
              size={'xl'}
              align={'center'}
              className={'approachHeading'}
            >
              {SectionHeadingDatas.sectionApproach.heading}
            </Typography>
          </Up>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Up>
            <Typography
              component={'p'}
              variant={'copy'}
              colors={'black'}
              size={'lg'}
              className={'approachCopy'}
            >
              {SectionHeadingDatas.sectionApproach.copy}
            </Typography>
          </Up>
          <div className={'approachLeadWrapper'}>
            <Up>
              <Typography component={'p'} variant={'lead'} colors={'white'}>
                <span>
                  デザイン会社や制作会社におけるビジネス的な課題解決はもはや当たり前の時代になりつつあります。
                </span>
                <span>
                  私達は「当たり前のその先」にあるユーザーの感情を動かすデザインに取り組みます。
                </span>
                <span>
                  このプロダクト、このお店、このサービスだからこそ使いたいと思えるデザインをカタチにしていくことに全力を注ぎます。
                </span>
              </Typography>
            </Up>
          </div>
        </Grid>
      </Grid>
    </Container>
  </Section>
)
