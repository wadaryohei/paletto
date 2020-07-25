import React from 'react'
import { Container } from '@material-ui/core'
import { Section } from '../../../../../components/Section'
import { Typography } from '../../../../../components/Typography'
import { AboutDatas, About, AboutList } from '../../../../../datas/AboutDatas'

//----------------------------------
// props
//----------------------------------
export interface SectionMainProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const SectionMainComponent = (props: SectionMainProps) => (
  <Section className={props.className}>
    <Container maxWidth={'md'}>
      <div className={'aboutWrapper'}>
        <Typography
          component={'h1'}
          variant={'heading'}
          className={'aboutHeading'}
        >
          Palettoが目指す未来
        </Typography>

        {AboutDatas.map((AboutData: About, index: number) => {
          return (
            <div key={index} className={'aboutGrid'}>
              <div className={'aboutHeaderWrapper'}>
                <p className={'aboutWrite'}>{AboutData.writing}​</p>
                <Typography
                  component={'h2'}
                  variant={'copy'}
                  className={'aboutCopy'}
                >
                  {AboutData.heading}
                </Typography>
              </div>

              <div className={'aboutLeadWrapper'}>
                <Typography component={'p'} variant={'lead'}>
                  <span>{AboutData.lead}</span>
                </Typography>

                {AboutData.lists?.map((list: AboutList, index: number) => {
                  return (
                    <Typography key={index} component={'p'} variant={'lead'}>
                      <span className={'aboutLeadInWrapper'}>
                        <span>{list.subHeading}</span>
                        <span>{list.lead}</span>
                      </span>
                    </Typography>
                  )
                })}
              </div>
            </div>
          )
        })}

        <div className={'aboutHandWriteWrapper'}>
          <img
            className={'aboutHandWrite'}
            src="pages/about/about_handwrite.svg"
            width="420"
            height="120"
          />
        </div>
      </div>
    </Container>
  </Section>
)
