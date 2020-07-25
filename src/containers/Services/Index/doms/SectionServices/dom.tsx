import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { Section } from '../../../../../components/Section'
import { Link } from '../../../../../components/Link'
import { More } from '../../../../../components/More'
import { ServiceCard } from '../../../../Index/doms/SectionService/ServiceCard'
import {
  ServicesDatas,
  Services,
} from '../../../../../datas/_shared/ServicesDatas'

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
          {ServicesDatas.map((ServicesData: Services, index: number) => {
            return (
              <Grid
                key={index}
                item
                md={8}
                xs={12}
                className={'servicesCardGrid'}
              >
                <Link href={ServicesData.viewMorePath}>
                  <ServiceCard
                    ServicesData={ServicesData}
                    className={'serviceCard'}
                  />
                  <More />
                </Link>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </div>
  </Section>
)
