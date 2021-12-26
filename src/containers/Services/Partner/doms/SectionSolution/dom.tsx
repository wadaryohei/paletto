import React from 'react'
import { Section } from '../../../../../components/Section'
import { Typography } from '../../../../../components/Typography'
import { Up } from '../../../../../components/InViewMonitor'
import { ServicesDesignSolutionDatas, ServicesDesignSolutionType } from '../../../../../datas/ServicesDatas'

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
      <Typography component={'h2'} variant={'heading'} size={'xxl'} colors={'primary'} className={'servicesDesignPartnerHeading'}>
        What we can do for partners.
      </Typography>
    </Up>

    <Up>
      <Typography component={'p'} variant={'subheading'}>
        私達がパートナーとしてできること
      </Typography>
    </Up>

    <ul className={'servicesDesignSolutionList'}>
      {ServicesDesignSolutionDatas.map((ServicesDesignSolutionData: ServicesDesignSolutionType, index: number) => {
        return (
          <li key={index}>
            <Typography
              component={'span'}
              variant={'subheading'}
              colors={'primary'}
              family={'en'}
              weight={'bold'}
              size={'lg'}
              className={'servicesDesignSolutionListNum'}
            >
              <Up>{ServicesDesignSolutionData.num}</Up>
            </Typography>
            <div className={'servicesDesignSolutionListWrapper'}>
              <Up>
                <Typography component={'h2'} variant={'heading'} size={'lg'} className={'servicesDesignSolutionListHeading'}>
                  {ServicesDesignSolutionData.copyEn}
                </Typography>
              </Up>

              <Up>
                <Typography component={'p'} variant={'subheading'} weight={'normal'} size={'sm'}>
                  {ServicesDesignSolutionData.copyJp}
                </Typography>
              </Up>

              <Up>
                <Typography component={'p'} variant={'lead'} weight={'bold'} className={'servicesDesignSolutionListLead'}>
                  {ServicesDesignSolutionData.lead}
                </Typography>
              </Up>

              <Up>
                <Typography
                  component={'h2'}
                  variant={'lead'}
                  size={'md'}
                  weight={'bold'}
                  family={'en'}
                  className={'servicesDesignSolutionListDescription'}
                >
                  Solution.
                </Typography>
              </Up>

              <Up>
                <Typography component={'p'} variant={'lead'} size={'sm'} colors={'black'} className={'servicesDesignSolutionListNotes'}>
                  {ServicesDesignSolutionData.solution}
                </Typography>
              </Up>
            </div>
          </li>
        )
      })}
    </ul>
  </Section>
)
