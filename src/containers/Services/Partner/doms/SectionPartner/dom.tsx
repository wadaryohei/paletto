import React from 'react'
import { Section } from '../../../../../components/Section'
import { Typography } from '../../../../../components/Typography'
import {
  ServicesDesignPartnersDatas,
  ServicesDesignPartners,
} from '../../../../../datas/ServicesDatas'
import { Up } from '../../../../../components/InViewMonitor'

//----------------------------------
// props
//----------------------------------
export interface SectionPartnerProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const SectionPartnerComponent = (props: SectionPartnerProps) => (
  <Section className={props.className}>
    <div className={'servicesDesignPartnerWrapper'}>
      <Up>
        <Typography
          component={'h2'}
          variant={'heading'}
          className={'servicesDesignPartnerHeading'}
        >
          How to work with partners.
        </Typography>
      </Up>
      <Up>
        <Typography component={'p'} variant={'subheading'}>
          パートナーとの取り組み方
        </Typography>
      </Up>

      <ul className={'servicesDesignPartnerList'}>
        {ServicesDesignPartnersDatas.map(
          (
            ServicesDesignPartnersData: ServicesDesignPartners,
            index: number,
          ) => {
            return (
              <li key={index}>
                <span className={'servicesDesignPartnerListNum'}>
                  <Up>{ServicesDesignPartnersData.num}</Up>
                </span>
                <div className={'servicesDesignPartnerListLeadWrapper'}>
                  <Up>
                    <Typography
                      component={'h2'}
                      variant={'heading'}
                      className={'servicesDesignPartnerListHeading'}
                    >
                      {ServicesDesignPartnersData.copyEn}
                    </Typography>
                  </Up>

                  <Up>
                    <Typography
                      component={'p'}
                      variant={'subheading'}
                      className={'servicesDesignPartnerListSubHeading'}
                    >
                      {ServicesDesignPartnersData.copyJp}
                    </Typography>
                  </Up>

                  <Up>
                    <Typography
                      component={'p'}
                      variant={'lead'}
                      className={'servicesDesignPartnerListLead'}
                    >
                      {ServicesDesignPartnersData.lead}
                    </Typography>
                  </Up>
                </div>
              </li>
            )
          },
        )}
      </ul>
    </div>
  </Section>
)
