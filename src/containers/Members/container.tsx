import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { PagesLayout } from '../../components/_shared/PagesLayout'
import { Section } from '../../components/Section'
import { Icon } from '../../components/Icon'
import { Link } from '../../components/Link'
import { useMembersPresenter } from './presenter/useMembersPresenter'
import { MembersViewDatas } from './presenter/viewDatas/MembersViewDatas'
import { MemberDatas } from '../../datas/_shared/MemberDatas'
import { PageDatas } from '../../datas/_shared/PageDatas'
import { Social } from '../../datas/_shared/SocialDatas'
import { Typography } from '../../components/Typography'

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
  //----------------------------------
  // hooks
  //----------------------------------
  const presenter = useMembersPresenter(MemberDatas)

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
            {presenter
              .membersViewDatas()
              .map((membersViewData: MembersViewDatas, index: number) => {
                return (
                  <Grid key={index} item md={6} className={'membersGrid'}>
                    <figure className={'membersWrapepr'}>
                      <div className={'membersImgWrapper'}>
                        <img
                          src={membersViewData.imgPathname}
                          alt={membersViewData.name}
                          width="120px"
                          height="120px"
                        />
                      </div>

                      <div className={'membersSocialWrapper'}>
                        <figcaption>{membersViewData.name}</figcaption>
                        <ul className={'membersSocialList'}>
                          {membersViewData.socials?.map(
                            (social: Social, index: number) => {
                              return (
                                <li key={index}>
                                  <Link href={social.path} target={true}>
                                    <Icon icon={social.name} />
                                  </Link>
                                </li>
                              )
                            },
                          )}
                        </ul>
                      </div>
                    </figure>

                    <div className={'membersLeadWrapepr'}>
                      <Typography component={'p'} variant={'lead'}>
                        {membersViewData.introduce.map(
                          (memberViewData: string, index: number) => {
                            return <span key={index}>{memberViewData}</span>
                          },
                        )}
                      </Typography>
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
