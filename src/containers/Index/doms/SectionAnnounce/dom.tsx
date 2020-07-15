import React from 'react'
import { Grid } from '@material-ui/core'
import { Section } from '../../../../components/Section'
import { Text } from '../../../../components/Text'

//----------------------------------
// props
//----------------------------------
export interface SectionAnnounceProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const SectionAnnounceComponent = (props: SectionAnnounceProps) => (
  <Section className={props.className}>
    <Grid container spacing={4} className={'announceWrapper'}>
      <Grid item md={6} sm={12} xs={12}>
        <Text
          component={'h2'}
          textStyle={'accentheading'}
          className={'announceHeading'}
        >
          Approach.
        </Text>
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <Text component={'h2'} textStyle={'accentheading'}>
          当たり前のその先へ
        </Text>
        <div className={'annouceLeadWrapper'}>
          <Text component={'p'} textStyle={'lead'} className={'announceLead'}>
            <span>
              ビジネス的なゴールや課題解決はもはや当たり前の時代になりました。
            </span>
            <span>
              私達は「当たり前のその先」にあるユーザーの感情を動かすデザインに取り組みます。
            </span>
            <span>
              このプロダクト、このお店、このサービスだからこそ使いたいと思えるデザインを作っていきます。
            </span>
          </Text>
        </div>
      </Grid>
    </Grid>
  </Section>
)
