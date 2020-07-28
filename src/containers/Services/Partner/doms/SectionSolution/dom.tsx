import React from 'react'
import { Section } from '../../../../../components/Section'
import { Typography } from '../../../../../components/Typography'
import {
  ServicesDesignSolutionDatas,
  ServicesDesignSolution,
} from '../../../../../datas/ServicesDatas'
import { Up } from '../../../../../components/InViewMonitor'

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
    <Up>
      <Typography
        component={'h2'}
        variant={'heading'}
        className={'servicesDesignPartnerHeading'}
      >
        What we can do for partners.
      </Typography>
    </Up>

    <Up>
      <Typography component={'p'} variant={'subheading'}>
        私達がパートナーとしてできること
      </Typography>
    </Up>

    <ul className={'servicesDesignSolutionList'}>
      {ServicesDesignSolutionDatas.map(
        (ServicesDesignSolutionData: ServicesDesignSolution, index: number) => {
          return (
            <li key={index}>
              <span className={'servicesDesignSolutionListNum'}>
                <Up>{ServicesDesignSolutionData.num}</Up>
              </span>
              <div className={'servicesDesignSolutionListWrapper'}>
                <Up>
                  <Typography
                    component={'h2'}
                    variant={'heading'}
                    className={'servicesDesignSolutionListHeading'}
                  >
                    {ServicesDesignSolutionData.copyEn}
                  </Typography>
                </Up>

                <Up>
                  <Typography
                    component={'p'}
                    variant={'subheading'}
                    className={'servicesDesignSolutionListSubHeading'}
                  >
                    {ServicesDesignSolutionData.copyJp}
                  </Typography>
                </Up>

                <Up>
                  <Typography
                    component={'p'}
                    variant={'lead'}
                    className={'servicesDesignSolutionListLead'}
                  >
                    {ServicesDesignSolutionData.lead}
                  </Typography>
                </Up>

                <Up>
                  <Typography
                    component={'h2'}
                    className={'servicesDesignSolutionListDescription'}
                    variant={'lead'}
                  >
                    Design Solution.
                  </Typography>
                </Up>

                <Up>
                  <Typography
                    component={'p'}
                    variant={'lead'}
                    className={'servicesDesignSolutionListNotes'}
                  >
                    {ServicesDesignSolutionData.solution}
                  </Typography>
                </Up>
              </div>
            </li>
          )
        },
      )}
    </ul>
  </Section>
)
