import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { Section } from '@/components/layouts/section'
import { LinkButton } from '@/components/elements/button'
import { More } from '@/components/elements/more'
import { Up } from '@/components/elements/inviewmonitor'
import * as Card from '@/features/card/components/Index'
import { ServicesCardDatas, ServicesCardType } from '@/datas/CardDatas'

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
  <>
    <Section className={props.className}>
      <div className={'serviceCardWrapper'}>
        <Container>
          <Grid container spacing={4}>
            {ServicesCardDatas.map((ServicesCardData: ServicesCardType, index: number) => {
              return (
                <Grid key={index} item md={8} xs={12} className={'serviceCardGrid'}>
                  <Up>
                    <Card.ServiceCard ServicesCardData={ServicesCardData} className={'serviceCard'} />
                  </Up>
                </Grid>
              )
            })}
          </Grid>

          <Up>
            <div className={'servicesButtonWrapper'}>
              <LinkButton href={'/services/partner'} color={'primary'} size={'md'}>
                <More>View More</More>
              </LinkButton>
            </div>
          </Up>
        </Container>
      </div>
    </Section>
  </>
)
