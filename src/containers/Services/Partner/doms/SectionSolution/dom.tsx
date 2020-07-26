import React from 'react'
import { Section } from '../../../../../components/Section'
import { Typography } from '../../../../../components/Typography'
import {
  ServicesDesignSolutionDatas,
  ServicesDesignSolution,
} from '../../../../../datas/ServicesDatas'

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
      What we can do for partners.
    </Typography>
    <Typography component={'p'} variant={'subheading'}>
      私達がパートナーとしてできること
    </Typography>

    <ul className={'servicesDesignSolutionList'}>
      {ServicesDesignSolutionDatas.map(
        (ServicesDesignSolutionData: ServicesDesignSolution, index: number) => {
          return (
            <li key={index}>
              <span className={'servicesDesignSolutionListNum'}>
                {ServicesDesignSolutionData.num}
              </span>
              <div className={'servicesDesignSolutionListWrapper'}>
                <Typography
                  component={'h2'}
                  variant={'heading'}
                  className={'servicesDesignSolutionListHeading'}
                >
                  {ServicesDesignSolutionData.copyEn}
                </Typography>
                <Typography
                  component={'p'}
                  variant={'subheading'}
                  className={'servicesDesignSolutionListSubHeading'}
                >
                  {ServicesDesignSolutionData.copyJp}
                </Typography>
                <Typography
                  component={'p'}
                  variant={'lead'}
                  className={'servicesDesignSolutionListLead'}
                >
                  {ServicesDesignSolutionData.lead}
                </Typography>

                <Typography
                  component={'h2'}
                  className={'servicesDesignSolutionListDescription'}
                >
                  Design Solution.
                </Typography>
                <Typography
                  component={'p'}
                  variant={'lead'}
                  className={'servicesDesignSolutionListNotes'}
                >
                  {ServicesDesignSolutionData.solution}
                </Typography>
              </div>
            </li>
          )
        },
      )}
    </ul>
  </Section>
)
