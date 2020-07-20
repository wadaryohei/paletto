import React from 'react'
import Link from 'next/link'
import { Box, Grid, Container } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import { Members } from './Members'
import { Member, MemberDatas } from '../../datas/_shared/MemberDatas'

//----------------------------------
// props
//----------------------------------
export interface FooterProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const FooterComponent = (props: FooterProps) => (
  <footer className={props.className}>
    <Container>
      <Grid container spacing={2}>
        <Grid item md={6} sm={12} xs={12}>
          <Link href={{ pathname: '/contact' }}>
            <a className={'footerContactLink'}>
              <div className={'footerContactWrapper'}>
                <h2 className={'footerContactHeading'}>Contact</h2>
                <p className={'footerContactLead'}>
                  <span>ビジネス課題をお待ちしております。</span>
                  <span>
                    BtoB、BtoC、CtoC事業の皆様へ、パートナーとしてぜひお手伝い致しますますので、まずはご連絡くださいませ。
                  </span>
                </p>
              </div>
            </a>
          </Link>
        </Grid>

        <Grid item md={6} sm={12} xs={12}>
          <div className={'footerSocialWrapper'}>
            <div className={'footerSocials'}>
              <span className={'footerSocialsHeading'}>Social</span>
              <hr />
              <p className={'footerSocials'}>
                <span className={'footerSocialIconsWrapper'}>
                  <TwitterIcon className={'footerSocialsIcon'} />
                  <FacebookIcon className={'footerSocialsIcon'} />
                </span>
              </p>
            </div>
          </div>

          <div className={'footerMembersWrapper'}>
            <p className={'footerMembersHeading'}>Paletto Members</p>
            <div className={'footerMembers'}>
              {MemberDatas.map((MemberData: Member, index: number) => {
                return <Members key={index} MemberData={MemberData} />
              })}
            </div>
          </div>
        </Grid>

        <Box className={'footerCopyWrapper'}>
          <p>2020 Paletto.</p>
        </Box>
      </Grid>
    </Container>
  </footer>
)
