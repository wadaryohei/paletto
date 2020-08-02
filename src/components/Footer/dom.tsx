import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { Link } from '../Link/'
import { Members } from './Members'
import { Typography } from '../Typography'
import { MemberDatas, MemberType } from '../../datas/_shared/MemberDatas'

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
      <Grid container spacing={4}>
        <Grid item md={6} sm={12} xs={12}>
          <Link
            href={'/contact'}
            routeMatch={false}
            className={'footerContactLink'}
          >
            <div className={'footerContactWrapper'}>
              <Typography
                component={'h2'}
                variant={'subheading'}
                colors={'black'}
                size={'lg'}
                weight={'bold'}
                family={'en'}
              >
                Contact
              </Typography>
              <Typography
                component={'p'}
                variant={'lead'}
                className={'footerContactLead'}
                size={'xs'}
              >
                <span>ビジネス課題をお待ちしております。</span>
                <span>
                  BtoB、BtoC、CtoC事業の皆様へ、パートナーとしてぜひお手伝い致しますますので、まずはご連絡くださいませ。
                </span>
              </Typography>
            </div>
          </Link>
        </Grid>

        <Grid item md={6} sm={12} xs={12}>
          {/**@memo 一旦SNSは非表示にしておく */}
          {/* <div className={'footerSocialWrapper'}>
            <div className={'footerSocials'}>
              <span className={'footerSocialsHeading'}>Social</span>
              <hr />
              <p className={'footerSocials'}>
                <span className={'footerSocialIconsWrapper'}>
                  <FacebookIcon className={'footerSocialsIcon'} />
                </span>
              </p>
            </div>
          </div> */}

          <div className={'footerMembersWrapper'}>
            <Typography
              component={'p'}
              variant={'lead'}
              colors={'white'}
              weight={'bold'}
              family={'en'}
              className={'footerMembersHeading'}
            >
              Paletto Members
            </Typography>
            <div className={'footerMembers'}>
              {MemberDatas.map((MemberData: MemberType, index: number) => {
                return <Members key={index} memberData={MemberData} />
              })}
            </div>
          </div>
        </Grid>

        <div className={'footerCopyWrapper'}>
          <Typography
            component={'p'}
            variant={'lead'}
            colors={'white'}
            size={'md'}
            align={'center'}
            weight={'bold'}
            family={'en'}
            className={'footerCopyWrapper'}
          >
            2020 Paletto.
          </Typography>
        </div>
      </Grid>
    </Container>
  </footer>
)
