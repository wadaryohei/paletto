import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { Link } from '@/components/elements/link'
import { Typography } from '@/components/elements/typography'

//----------------------------------
// props
//----------------------------------
export interface Props {
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const Index = (props: Props) => (
  <footer className={props.className}>
    <Container>
      <Grid container spacing={4}>
        <Grid item md={12} sm={12} xs={12}>
          <Link href={'/contact'} routeMatch={false} className={'footerContactLink'}>
            <div className={'footerContactWrapper'}>
              <Typography component={'h2'} variant={'subheading'} colors={'black'} size={'lg'} weight={'bold'} family={'en'}>
                Contact
              </Typography>
              <Typography component={'p'} variant={'lead'} className={'footerContactLead'} size={'xs'}>
                <span>ビジネス課題をお待ちしております。</span>
                <span>BtoB、BtoC、CtoC事業の皆様へ、パートナーとしてぜひお手伝い致しますますので、まずはご連絡くださいませ。</span>
              </Typography>
            </div>
          </Link>
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
