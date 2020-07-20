import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { Section } from '../../../../components/Section'
import { Text } from '../../../../components/Text'
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
          <Text
            component={'h2'}
            textStyle={'heading'}
            className={'approachHeading'}
          >
            {SectionHeadingDatas.sectionApproach.heading}
          </Text>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Text component={'h2'} textStyle={'copy'} className={'approachCopy'}>
            {SectionHeadingDatas.sectionApproach.copy}
          </Text>
          <div className={'approachLeadWrapper'}>
            <Text component={'p'} textStyle={'lead'} className={'approachLead'}>
              <span>
                デザイン会社・制作会社におけるビジネス的な課題解決はもはや当たり前の時代になりました。
              </span>
              <span>
                私達は「当たり前のその先」にあるユーザーの感情を動かすデザインに取り組みます。
              </span>
              <span>
                このプロダクト、このお店、このサービスだからこそ使いたいと思えるデザインを作ることに全力を注ぎます。
              </span>
            </Text>
          </div>
        </Grid>
      </Grid>
    </Container>
  </Section>
)
