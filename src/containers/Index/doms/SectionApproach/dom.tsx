import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { Section } from '../../../../components/Section'
import { Typography } from '../../../../components/Typography'
import { SectionHeadingDatas } from '../../../../datas/IndexDatas'

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
          <Typography
            component={'h1'}
            variant={'heading'}
            className={'approachHeading'}
          >
            {SectionHeadingDatas.sectionApproach.heading}
          </Typography>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Typography
            component={'p'}
            variant={'copy'}
            className={'approachCopy'}
          >
            {SectionHeadingDatas.sectionApproach.copy}
          </Typography>
          <div className={'approachLeadWrapper'}>
            <Typography
              component={'p'}
              variant={'lead'}
              className={'approachLead'}
            >
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
          </div>
        </Grid>
      </Grid>
    </Container>
  </Section>
)
