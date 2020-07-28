import React from 'react'
import { Container } from '@material-ui/core'
import { Section } from '../../../../../components/Section'
import { Typography } from '../../../../../components/Typography'
import { AboutDatas, About, AboutList } from '../../../../../datas/AboutDatas'
import { Up } from '../../../../../components/InViewMonitor'

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
        <Up>
          <Typography
            component={'h1'}
            variant={'heading'}
            className={'aboutHeading'}
          >
            Palettoが目指す未来
          </Typography>
        </Up>
        {AboutDatas.map((AboutData: About, index: number) => {
          return (
            <div key={index} className={'aboutGrid'}>
              <div className={'aboutHeaderWrapper'}>
                <Up>
                  <p className={'aboutWrite'}>{AboutData.writing}​</p>
                </Up>
                <Up>
                  <Typography
                    component={'h2'}
                    variant={'copy'}
                    className={'aboutCopy'}
                  >
                    {AboutData.heading}
                  </Typography>
                </Up>
              </div>

              <div className={'aboutLeadWrapper'}>
                <Up>
                  <Typography component={'p'} variant={'lead'}>
                    <span>{AboutData.lead}</span>
                  </Typography>
                </Up>
                {AboutData.lists?.map((list: AboutList, index: number) => {
                  return (
                    <Up key={index}>
                      <Typography component={'p'} variant={'lead'}>
                        <span className={'aboutLeadInWrapper'}>
                          <span>{list.subHeading}</span>
                          <span>{list.lead}</span>
                        </span>
                      </Typography>
                    </Up>
                  )
                })}
              </div>
            </div>
          )
        })}

        <Up>
          <div className={'aboutHandWriteWrapper'}>
            <img
              className={'aboutHandWrite'}
              src="pages/about/about_handwrite.svg"
              width="420"
              height="120"
            />
          </div>
        </Up>
      </div>
    </Container>
  </Section>
)
