import React from 'react'
import { Box, Grid } from '@material-ui/core'
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
    <Grid container spacing={2}>
      <Grid item md={6} sm={12} xs={12}>
        <div className={'footerContactWrapper'}>
          <h2 className={'footerContactHeading'}>Contact</h2>
          <p className={'footerContactLead'}>
            <span>パートナー様のデザイン課題をお待ちしております。</span>
            <span>
              プロダクトの開発やブランドの構築などなんでもお気軽にご相談ください。
            </span>
          </p>
        </div>
      </Grid>

      <Grid item md={6} sm={12} xs={12}>
        <div className={'footerSocialWrapper'}>
          <p className={'footerSocials'}>
            <span className={'footerSocialsHeading'}>Social</span>
            <hr />
            <span className={'footerSocialIconsWrapper'}>
              <TwitterIcon className={'footerSocialsIcon'} />
              <FacebookIcon className={'footerSocialsIcon'} />
            </span>
          </p>
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
  </footer>
)
