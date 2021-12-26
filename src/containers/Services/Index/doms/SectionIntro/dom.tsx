import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { Section } from '../../../../../components/Section'
import { Typography } from '../../../../../components/Typography'
import { Up } from '../../../../../components/InViewMonitor'

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
          <Up>
            <Typography component={'h1'} variant={'copy'}>
              感情を動かすデザインを
            </Typography>
          </Up>
          <div className={'servicesLeadWrapper'}>
            <Up>
              <Typography component={'p'} variant={'lead'}>
                <span>
                  私達の目指すコアであるUXとしての「エモーショナルなデザイン」を実現する方法として「デザイン/開発パートナー事業」を1つの事業として提供しています。
                </span>
              </Typography>

              <Typography component={'p'} variant={'lead'}>
                <span>
                  クライアントの本質課題をデザインの力で解決することを前提とした「デザイン」と、本質課題を解決するための「開発」をワンストップで行うことが可能です。
                </span>
              </Typography>
              <Typography component={'p'} variant={'lead'}>
                <span>
                  デザイン・開発いずれかのご依頼も可能となっており、事業のグロース支援から事業ブランディングにフルコミットし最高のUI/UXでビジネス課題を解決致します。
                </span>
              </Typography>
            </Up>
          </div>
        </Grid>
      </Grid>
    </Container>
  </Section>
)
