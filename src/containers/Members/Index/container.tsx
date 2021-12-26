import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { PagesLayout } from '../../../components/_shared/PagesLayout'
import { Section } from '../../../components/Section'
import { SocialIcon } from '../../../components/Icon/Social'
import { Link } from '../../../components/Link'
import { Typography } from '../../../components/Typography'
import { Up } from '../../../components/InViewMonitor'
import { MemberDatas, MemberType } from '../../../datas/_shared/MemberDatas'
import { PageDatas } from '../../../datas/_shared/PageDatas'
import { SocialType } from '../../../datas/_shared/SocialDatas'
import { useStringProcessing } from '../../../hooks/useStringProcessing'

//----------------------------------
// props
//----------------------------------
export interface MembersProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
const MembersContainer = (props: MembersProps) => {
  const stringProcessing = useStringProcessing()
  //----------------------------------
  // render
  //----------------------------------
  return (
    <PagesLayout
      className={props.className}
      pathname={PageDatas.members.pathname}
      pageHeaderBgPathname={PageDatas.members.pageHeaderBgPathname}
      pageHeading={PageDatas.members.pageHeading}
    >
      {/** @section Members */}
      <Section className={'l-members'}>
        <Container>
          <Grid container spacing={4}>
            {MemberDatas.map((MemberData: MemberType, index: number) => {
              return (
                <Grid key={index} item md={6} className={'membersGrid'}>
                  <Up>
                    <figure className={'membersWrapepr'}>
                      <div className={'membersImgWrapper'}>
                        <img src={MemberData.imgPathname} alt={MemberData.name} width="120px" height="120px" />
                      </div>

                      <div className={'membersSocialWrapper'}>
                        <Up>
                          <Typography
                            component={'figcaption'}
                            variant={'subheading'}
                            size={'sm'}
                            family={'en'}
                            weight={'bold'}
                            colors={'white'}
                          >
                            {MemberData.name}
                          </Typography>
                        </Up>
                        <ul className={'membersSocialList'}>
                          {MemberData.socials?.map((social: SocialType, index: number) => {
                            return (
                              <Up key={index}>
                                <li>
                                  <Link href={social.path} target={true}>
                                    <SocialIcon icon={social.name} />
                                  </Link>
                                </li>
                              </Up>
                            )
                          })}
                        </ul>
                      </div>
                    </figure>
                  </Up>

                  <div className={'membersLeadWrapepr'}>
                    <Up>
                      <Typography component={'p'} variant={'lead'} className={'membersLead'}>
                        {stringProcessing.strToSplit(MemberData.introduce).map((MemberData: string, index: number) => {
                          return <span key={index}>{MemberData}</span>
                        })}
                      </Typography>
                    </Up>
                  </div>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </Section>
    </PagesLayout>
  )
}

export default MembersContainer
