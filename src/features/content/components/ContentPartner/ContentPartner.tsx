import React from 'react'
import { Section } from '@/components/layouts/section'
import { Typography } from '@/components/elements/typography'
import { Up } from '@/components/elements/inviewmonitor'
import { ServicesDesignPartnersDatas, ServicesDesignPartnersType } from '@/datas/ServicesDatas'

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
    <div className={'servicesDesignPartnerWrapper'}>
      <Up>
        <Typography component={'h2'} variant={'heading'} size={'xxl'} colors={'primary'} className={'servicesDesignPartnerHeading'}>
          How to work with partners.
        </Typography>
      </Up>
      <Up>
        <Typography component={'p'} variant={'subheading'}>
          パートナーとの取り組み方
        </Typography>
      </Up>

      <ul className={'servicesDesignPartnerList'}>
        {ServicesDesignPartnersDatas.map((ServicesDesignPartnersData: ServicesDesignPartnersType, index: number) => {
          return (
            <li key={index}>
              <Typography
                component={'span'}
                variant={'subheading'}
                colors={'primary'}
                family={'en'}
                weight={'bold'}
                size={'lg'}
                className={'servicesDesignPartnerListNum'}
              >
                <Up>{ServicesDesignPartnersData.num}</Up>
              </Typography>
              <div className={'servicesDesignPartnerListLeadWrapper'}>
                <Up>
                  <Typography component={'h2'} variant={'heading'} size={'lg'} className={'servicesDesignPartnerListHeading'}>
                    {ServicesDesignPartnersData.copyEn}
                  </Typography>
                </Up>

                <Up>
                  <Typography component={'p'} variant={'subheading'} weight={'normal'}>
                    {ServicesDesignPartnersData.copyJp}
                  </Typography>
                </Up>

                <Up>
                  <Typography component={'p'} variant={'lead'} className={'servicesDesignPartnerListLead'}>
                    {ServicesDesignPartnersData.lead}
                  </Typography>
                </Up>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  </Section>
)
