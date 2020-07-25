import React from 'react'
import { Section } from '../../../../../components/Section'
import { Typography } from '../../../../../components/Typography'
import { ServicesDesignPartnersDatas, ServicesDesignPartners } from '../../../../../datas/ServicesDatas'

//----------------------------------
// props
//----------------------------------
export interface SectionSolutionProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const SectionSolutionComponent = (props: SectionSolutionProps) => (
  <Section className={props.className}>
    <Typography
      component={'h2'}
      variant={'heading'}
      className={'servicesDesignPartnerHeading'}
    >
      What we can do as partners.
    </Typography>
    <Typography component={'p'} variant={'subheading'}>
      私達がパートナーとしてできること
    </Typography>

    <ul className={'servicesDesignSolutionList'}>
      {ServicesDesignPartnersDatas.map(
        (ServicesDesignPartnersData: ServicesDesignPartners, index: number) => {
          return (
            <li key={index}>
              <span className={'servicesDesignSolutionListNum'}>
                {ServicesDesignPartnersData.num}
              </span>
              <div className={'servicesDesignSolutionListWrapper'}>
                <Typography
                  component={'h2'}
                  variant={'heading'}
                  className={'servicesDesignSolutionListHeading'}
                >
                  {ServicesDesignPartnersData.copyEn}
                </Typography>
                <Typography
                  component={'p'}
                  variant={'subheading'}
                  className={'servicesDesignSolutionListSubHeading'}
                >
                  {ServicesDesignPartnersData.copyJp}
                </Typography>
                <Typography
                  component={'p'}
                  variant={'lead'}
                  className={'servicesDesignSolutionListLead'}
                >
                  {ServicesDesignPartnersData.lead}
                </Typography>

                <Typography
                  component={'h2'}
                  variant={'subheading'}
                  className={'servicesDesignSolutionListDescription'}
                >
                  Design Solution.
                </Typography>
                <Typography
                  component={'p'}
                  variant={'lead'}
                  className={'servicesDesignSolutionListNotes'}
                >
                  {ServicesDesignPartnersData.solution}
                </Typography>
              </div>
            </li>
          )
        },
      )}
    </ul>
  </Section>
)
