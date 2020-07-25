import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { Section } from '../../../../../components/Section'
import { Typography } from '../../../../../components/Typography'

//----------------------------------
// props
//----------------------------------
export interface SectionIntroProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const SectionIntroComponent = (props: SectionIntroProps) => (
  <Section className={props.className}>
    <Container>
      <Grid container spacing={4} className={'servicesContainer'}>
        <Grid item md={6} className={'servicesIntroGrid'}>
          <Typography component={'h1'} variant={'copy'}>
            感情を動かすデザインを
          </Typography>
          <div className={'servicesLeadWrapper'}>
            <Typography component={'p'} variant={'lead'}>
              <span>
                私達の目指すコアである最高のユーザー体験を2つの事業を柱に提供します。
              </span>
              <span>
                クライアントの本質課題をデザインの力で解決する「デザインパートナー事業」と、その本質課題の解決における手段としての「制作パートナー事業」の2本柱があります。
              </span>
            </Typography>
            <Typography component={'p'} variant={'lead'}>
              <span>
                一貫した「デザインパートナー事業」と「制作パートナー事業」で、最高のUI/UXでビジネス課題を解決致します。
              </span>
            </Typography>
          </div>
        </Grid>
        <Grid item md={6} className={'servicesIntroGrid'}>
          <div className={'servicesIntroImageWrapper'}>
            <figure
              className={'servicesIntroImage'}
              style={{
                backgroundImage: `url(/pages/services/intro.svg)`,
              }}
            ></figure>
          </div>
        </Grid>
      </Grid>
    </Container>
  </Section>
)
