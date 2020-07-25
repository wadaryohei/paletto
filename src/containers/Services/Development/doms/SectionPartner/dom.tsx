import React from 'react'
import { Section } from '../../../../../components/Section'
import { Typography } from '../../../../../components/Typography'
import {
  ServicesDesignActionDatas,
  ServicesDesignAction,
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
        {ServicesDesignActionDatas.map(
          (ServicesDesignActionData: ServicesDesignAction, index: number) => {
            return (
              <li key={index}>
                <span className={'servicesDesignPartnerListNum'}>
                  {ServicesDesignActionData.num}
                </span>
                <div className={'servicesDesignPartnerListLeadWrapper'}>
                  <Typography
                    component={'h2'}
                    variant={'heading'}
                    className={'servicesDesignPartnerListHeading'}
                  >
                    {ServicesDesignActionData.copyEn}
                  </Typography>
                  <Typography
                    component={'p'}
                    variant={'subheading'}
                    className={'servicesDesignPartnerListSubHeading'}
                  >
                    {ServicesDesignActionData.copyJp}
                  </Typography>
                  <Typography
                    component={'p'}
                    variant={'lead'}
                    className={'servicesDesignPartnerListLead'}
                  >
                    {ServicesDesignActionData.lead}
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
