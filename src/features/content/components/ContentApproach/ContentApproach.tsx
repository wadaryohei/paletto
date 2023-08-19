import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { Section } from '@/components/layouts/section'
import { Typography } from '@/components/elements/typography'
import { Up } from '@/components/elements/inviewmonitor'

//----------------------------------
// props
//----------------------------------
export interface Props {
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const Index = (props: Props) => (
  <Section className={props.className}>
    <Container>
      <Grid container spacing={4} className={'approachWrapper'}>
        <Grid item md={6} sm={12} xs={12}>
          <Up>
            <Typography component={'h1'} variant={'heading'} colors={'white'} size={'xl'} align={'center'} className={'approachHeading'}>
              APPROACH.
            </Typography>
          </Up>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Up>
            <Typography component={'p'} variant={'copy'} colors={'black'} size={'lg'} className={'approachCopy'}>
              当たり前のその先へ
            </Typography>
          </Up>
          <div className={'approachLeadWrapper'}>
            <Up>
              <Typography component={'p'} variant={'lead'} colors={'white'}>
                <span>
                  プロダクト開発におけるビジネス的な課題解決はもはや当たり前の時代になりつつあります。私達は「当たり前のその先」にあるユーザーの感情を動かすプロダクト開発に取り組みます。
                </span>
                <span>この商品、このお店、このサービスだからこそ使いたいと思えるプロダクトをカタチにしていくことに全力を注ぎます。</span>
              </Typography>
            </Up>
          </div>
        </Grid>
      </Grid>
    </Container>
  </Section>
)
