import React from 'react'
import styled from 'styled-components'
import { Container, Grid } from '@material-ui/core'
import { Head } from '@/components/layouts/head'
import { PagesLayout } from '@/components/layouts/pages'
import { Section } from '@/components/layouts/section'
import { Typography } from '@/components/elements/typography'
import { Link } from '@/components/elements/link'
import { Up } from '@/components/elements/inviewmonitor'
import { useStringProcessing } from '@/hooks/useStringProcessing'
import { Padding } from '@/constants/Padding'
import { Margin } from '@/constants/Margin'
import { Colors } from '@/constants/Colors'
import { BreakPoints, max } from '@/constants/BreakPoints'
import { MemberDatas, MemberType } from '@/datas/MemberDatas'
import { PageDatas } from '@/datas/PageDatas'
import { HeadDatas } from '@/datas/HeadDatas'
import { SocialType } from '@/datas/SocialDatas'

//--------------------------------------
// style
//--------------------------------------
export const MembersStyle = styled.div`
  .l-members {
    background-color: ${Colors.white};
    padding: ${Padding.p160} 0;

    @media ${max(BreakPoints.md)} {
      padding: 0 0 ${Padding.p80};
    }

    .membersGrid {
      @media ${max(BreakPoints.md)} {
        margin-bottom: ${Margin.m64};
      }
    }

    .membersWrapepr {
      display: flex;
      align-items: center;
      justify-content: start;
      border-bottom: solid 1px ${Colors.smokeGray};
      padding-bottom: ${Padding.p32};

      @media ${max(BreakPoints.md)} {
        flex-direction: column;
      }
    }

    .membersImgWrapper {
      display: block;
      width: auto;
      max-width: 120px;
      height: 120px;
      margin: auto ${Margin.m32};

      @media ${max(BreakPoints.md)} {
        margin-right: 0;
      }

      img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
      }
    }

    .membersSocialWrapper {
      figcaption {
        display: inline-block;

        @media ${max(BreakPoints.lg)} {
          text-indent: 0;
        }

        @media ${max(BreakPoints.md)} {
          margin-top: ${Margin.m32};
          text-align: center;
        }
      }
    }

    .membersSocialList {
      display: flex;
      align-items: center;
      justify-content: start;
      margin-top: ${Margin.m16};

      @media ${max(BreakPoints.md)} {
        justify-content: center;
      }

      li {
        margin-right: ${Margin.m8};
        @media ${max(BreakPoints.md)} {
          justify-content: center;
        }

        a {
          display: block;
          color: ${Colors.black};

          svg {
            width: 24px;
            height: 24px;
          }
        }
      }
    }

    .membersLeadWrapepr {
      margin-top: ${Margin.m32};
    }
  }
`

//----------------------------------
// component
//----------------------------------
const Members = () => {
  const stringProcessing = useStringProcessing()

  return (
    <MembersStyle>
      <Head title={HeadDatas.members.title} description={HeadDatas.members.description} pathname={HeadDatas.members.pathname} />
      <PagesLayout
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
                              size={'md'}
                              family={'en'}
                              weight={'bold'}
                              colors={'black'}
                            >
                              {MemberData.name}
                            </Typography>
                          </Up>
                          <ul className={'membersSocialList'}>
                            {MemberData.socials?.map((social: SocialType, index: number) => {
                              return (
                                <li key={index}>
                                  <Up>
                                    <Link href={social.path} target={true}>
                                      <Typography
                                        component={'p'}
                                        variant={'subheading'}
                                        size={'sm'}
                                        family={'en'}
                                        weight={'bold'}
                                        colors={'black'}
                                      >
                                        {social.name}
                                      </Typography>
                                    </Link>
                                  </Up>
                                </li>
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
    </MembersStyle>
  )
}

export default Members
