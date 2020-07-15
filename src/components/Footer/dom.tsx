import React from 'react'
import { Box, Grid } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'

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
    <Grid container spacing={4}>
      <Grid item md={6} sm={12} xs={12}>
        <Box className={'footerContactWrapper'}>
          <h2 className={'footerContactHeading'}>Contact</h2>
          <p className={'footerContactLead'}>
            <span>パートナー様のデザイン課題をお待ちしております。</span>
            <span>
              プロダクトの開発やブランドの構築などなんでもお気軽にご相談ください。
            </span>
          </p>
        </Box>
      </Grid>

      <Grid item md={6} sm={12} xs={12}>
        <Box className={'footerSocialWrapper'}>
          <p className={'footerSocials'}>
            <span className={'footerSocialsHeading'}>Social</span>
            <hr />
            <Box component={'span'} className={'footerSocialIconsWrapper'}>
              <TwitterIcon className={'footerSocialsIcon'} />
              <FacebookIcon className={'footerSocialsIcon'} />
            </Box>
          </p>
        </Box>

        <Box className={'footerMembersWrapper'}>
          <p className={'footerMembersHeading'}>MEMBERS</p>
          <Box className={'footerMembers'}>
            <p>RYOHEI WADA</p>
            <p>MASATO NAKAMURA</p>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </footer>
)
