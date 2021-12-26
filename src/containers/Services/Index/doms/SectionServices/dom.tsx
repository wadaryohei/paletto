import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { Section } from '../../../../../components/Section'
import { More } from '../../../../../components/More'
import { Up } from '../../../../../components/InViewMonitor'
import { LinkButton } from '../../../../../components/Button'
import { ServiceCard } from '../../../../Index/doms/SectionService/ServiceCard'
import { ServicesCardDatas, ServicesCardType } from '../../../../../datas/_shared/CardDatas'

//----------------------------------
// props
//----------------------------------
export interface SectionServicesProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const SectionServicesComponent = (props: SectionServicesProps) => (
  <Section className={props.className}>
    <div className={'servicesCardWrapper'}>
      <Container disableGutters={true}>
        <Grid container spacing={4}>
          {ServicesCardDatas.map((ServicesCardData: ServicesCardType, index: number) => {
            return (
              <Grid key={index} item md={8} xs={12} className={'servicesCardGrid'}>
                <Up>
                  <ServiceCard ServicesCardData={ServicesCardData} className={'serviceCard'} />
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
)
