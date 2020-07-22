import React from 'react'
import { PagesLayout } from '../../components/_shared/PagesLayout'
import { PageDatas } from '../../datas/_shared/PageDatas'
import { Section } from '../../components/Section'
import { Text } from '../../components/Text'
import { Link } from '../../components/Link'
import { More } from '../../components/More'
import { Container, Grid } from '@material-ui/core'
import { ServicesData } from '../../datas/ServicesDatas'
import { ServicesDatas, Services } from '../../datas/_shared/ServiceDatas'
import { ServiceCard } from '../Index/doms/SectionService/ServiceCard'

//----------------------------------
// props
//----------------------------------
export interface ServicesProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
const ServicesContainer = (props: ServicesProps) => {
  //----------------------------------
  // render
  //----------------------------------
  return (
    <PagesLayout
      className={props.className}
      pathname={PageDatas.services.pathname}
      pageHeaderBgPathname={PageDatas.services.pageHeaderBgPathname}
      pageHeading={PageDatas.services.pageHeading}
    >
      {/** @section ServicesIntro */}
      <Section className={'l-services'}>
        <Container>
          <Grid container spacing={4} className={'servicesContainer'}>
            <Grid item md={6} className={'servicesIntroGrid'}>
              <Text component={'p'} textStyle={'copy'}>
                感情を動かすデザインを
              </Text>
              <div className={'servicesLeadWrapper'}>
                <Text component={'p'} textStyle={'lead'}>
                  <span>
                    クライアントの本質課題をデザインの力で解決する「デザインパートナー事業」と、その本質課題の解決における手段としての「制作パートナー事業」の2軸で展開しています。
                  </span>
                </Text>
                <Text component={'p'} textStyle={'lead'}>
                  <span>
                    もうひとつの「スケーラブル事業」では、資金的に多くは出せない場合や仮説検証を細かく行なっていきたいなどといった方のための、小さく始めて素早く仮設検証しスケールしていくための3つの事業から成り立っています。
                  </span>
                </Text>
              </div>
            </Grid>
            <Grid item md={6} className={'servicesIntroGrid'}>
              <div className={'servicesIntroImageWrapper'}>
                <figure
                  className={'servicesIntroImage'}
                  style={{
                    backgroundImage: `url(${ServicesData.imgIntroPath})`,
                  }}
                ></figure>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/** @section ServicesCard */}
      <div className={'servicesCardWrapper'}>
        <Container disableGutters={true}>
          <Grid container spacing={2}>
            {ServicesDatas.map((ServicesData: Services, index: number) => {
              return (
                <Grid
                  key={index}
                  item
                  md={6}
                  xs={12}
                  className={'servicesCardGrid'}
                >
                  <Link href={ServicesData.viewMorePath}>
                    <ServiceCard
                      ServicesData={ServicesData}
                      className={'serviceCard'}
                    />
                    <More />
                  </Link>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </div>
    </PagesLayout>
  )
}

export default ServicesContainer
