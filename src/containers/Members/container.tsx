import React from 'react'
import Link from 'next/link'
import { Container, Grid } from '@material-ui/core'
import { PagesLayout } from '../../components/_shared/PagesLayout'
import { Section } from '../../components/Section'
import { Text } from '../../components/Text'
import { useMembersPresenter } from './presenter/useMembersPresenter'
import { MembersViewDatas } from './presenter/viewDatas/MembersViewDatas'
import { MemberDatas } from '../../datas/_shared/MemberDatas'
import { PageDatas } from '../../datas/_shared/PageDatas'
import { SocialDatas } from '../../datas/_shared/SocialDatas'
import { Icon } from '../../components/Icon'

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
                          src={membersViewData.imgPath}
                          alt={membersViewData.name}
                          width="120px"
                          height="120px"
                        />
                      </div>

                      <div className={'membersSocialWrapper'}>
                        <figcaption>{membersViewData.name}</figcaption>
                        <ul className={'membersSocialList'}>
                          {membersViewData.socials?.map(
                            (social: SocialDatas, index: number) => {
                              return (
                                <li key={index}>
                                  <Link href={{ pathname: social.path }}>
                                    <a target="_blank">
                                      <Icon icon={social.name} />
                                    </a>
                                  </Link>
                                </li>
                              )
                            },
                          )}
                        </ul>
                      </div>
                    </figure>

                    <div className={'membersLeadWrapepr'}>
                      <Text component={'p'} textStyle={'lead'}>
                        {membersViewData.introduce.map(
                          (memberViewData: string, index: number) => {
                            return <span key={index}>{memberViewData}</span>
                          },
                        )}
                      </Text>
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
