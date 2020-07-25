import React from 'react'
import { Section } from '../../../../../components/Section'
import { Typography } from '../../../../../components/Typography'
import {
  ServicesDesignPartnersDatas,
  ServicesDesignPartners,
} from '../../../../../datas/ServicesDatas'

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
      <Typography
        component={'h2'}
        variant={'heading'}
        className={'servicesDesignPartnerHeading'}
      >
        Initiatives with partners.
      </Typography>
      <Typography component={'p'} variant={'subheading'}>
        パートナーとの取り組み方
      </Typography>

      <ul className={'servicesDesignPartnerList'}>
        {ServicesDesignPartnersDatas.map(
          (
            ServicesDesignPartnersData: ServicesDesignPartners,
            index: number,
          ) => {
            return (
              <li key={index}>
                <span className={'servicesDesignPartnerListNum'}>
                  {ServicesDesignPartnersData.num}
                </span>
                <div className={'servicesDesignPartnerListLeadWrapper'}>
                  <Typography
                    component={'h2'}
                    variant={'heading'}
                    className={'servicesDesignPartnerListHeading'}
                  >
                    {ServicesDesignPartnersData.copyEn}
                  </Typography>
                  <Typography
                    component={'p'}
                    variant={'subheading'}
                    className={'servicesDesignPartnerListSubHeading'}
                  >
                    {ServicesDesignPartnersData.copyJp}
                  </Typography>
                  <Typography
                    component={'p'}
                    variant={'lead'}
                    className={'servicesDesignPartnerListLead'}
                  >
                    {ServicesDesignPartnersData.lead}
                  </Typography>
                </div>
              </li>
            )
          },
        )}
      </ul>
    </div>
  </Section>
)
