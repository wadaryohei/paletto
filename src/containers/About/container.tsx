import React from 'react'
import Link from 'next/link'
import { Container } from '@material-ui/core'
import { PagesLayout } from '../../components/_shared/PagesLayout'
import { Section } from '../../components/Section'
import { Text } from '../../components/Text'
import { PageDatas } from '../../datas/_shared/PageDatas'

//----------------------------------
// props
//----------------------------------
export interface AboutProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
const AboutContainer = (props: AboutProps) => {
  //----------------------------------
  // render
  //----------------------------------
  return (
    <PagesLayout
      className={props.className}
      pageHeaderBgPathname={PageDatas.about.pageHeaderBgPathname}
      pageName={PageDatas.about.pathname}
    >
      {/** @section About */}
      <Section className={'l-about'}>
        <Container>
          <div className={'aboutWrapper'}>
            <div className={'aboutHeaderWrapper'}>
              <Text component={'p'} textStyle={'copy'} align={'center'}>
                感情を動かすデザインを
              </Text>
            </div>
            <div className={'aboutLeadWrapper'}>
              <Text component={'p'} textStyle={'lead'} align={'left'}>
                <span>人の感情に寄り添い、人の感情をデザインする。</span>
                <span>
                  そんな「エモーショナルなデザイン」をすることが私達「Paletto.」のVisionです。
                </span>
                <span>
                  AppleがiPhoneを発売したように、ユーザーを常に考え、ユーザーの生活を中心にプロダクトを考えた結果Appleは世界1位の企業になりました。
                </span>
                <span>感情を揺さぶるデザインでこそ、人の心は動きます。</span>
                <span>
                  「Paletto.」では課題の解決という当たり前のその先の、事業やサービスやプロダクトの思いをデザインでカタチにします。
                </span>
              </Text>
            </div>

            <div className={'aboutSubHeadingWrapper'}>
              <Text component={'p'} textStyle={'subheading'} align={'left'}>
                なぜ今デザインなのか？
              </Text>
            </div>

            <div className={'aboutLeadWrapper'}>
              <Text component={'p'} textStyle={'lead'} align={'left'}>
                <span>人の感情に寄り添い、人の感情をデザインする。</span>
                <span>
                  そんな「エモーショナルなデザイン」をすることが私達「Paletto.」のVisionです。
                </span>
                <span>
                  AppleがiPhoneを発売したように、ユーザーを常に考え、ユーザーの生活を中心にプロダクトを考えた結果Appleは世界1位の企業になりました。
                </span>
                <span>感情を揺さぶるデザインでこそ、人の心は動きます。</span>
                <span>
                  「Paletto.」では課題の解決という当たり前のその先の、事業やサービスやプロダクトの思いをデザインでカタチにします。
                </span>
              </Text>
            </div>

            <div className={'aboutSubHeadingWrapper'}>
              <Text component={'p'} textStyle={'subheading'} align={'left'}>
                私達が考えるデザイン
              </Text>
            </div>

            <div className={'aboutLeadWrapper'}>
              <Text component={'p'} textStyle={'lead'} align={'left'}>
                <span>人の感情に寄り添い、人の感情をデザインする。</span>
                <span>
                  そんな「エモーショナルなデザイン」をすることが私達「Paletto.」のVisionです。
                </span>
                <span>
                  AppleがiPhoneを発売したように、ユーザーを常に考え、ユーザーの生活を中心にプロダクトを考えた結果Appleは世界1位の企業になりました。
                </span>
                <span>感情を揺さぶるデザインでこそ、人の心は動きます。</span>
                <span>
                  「Paletto.」では課題の解決という当たり前のその先の、事業やサービスやプロダクトの思いをデザインでカタチにします。
                </span>
              </Text>
            </div>

            <div className={'aboutLinkWrapper'}>
              <Link href={{ pathname: '/services' }}>
                <a>SERVICES</a>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </PagesLayout>
  )
}

export default AboutContainer
