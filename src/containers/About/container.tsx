import React from 'react'
import { Container } from '@material-ui/core'
import { PagesLayout } from '../../components/_shared/PagesLayout'
import { Section } from '../../components/Section'
import { Text } from '../../components/Text'
import { PageDatas } from '../../datas/_shared/PageDatas'
import { Link } from '../../components/Link'

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
      pathname={PageDatas.about.pathname}
      pageHeaderBgPathname={PageDatas.about.pageHeaderBgPathname}
      pageHeading={PageDatas.about.pageHeading}
    >
      {/** @section About */}
      <Section className={'l-about'}>
        <Container maxWidth={'md'}>
          <div className={'aboutWrapper'}>
            <h1 className={'aboutHeading'}>Palettoが目指す未来</h1>
            <div className={'aboutGrid'}>
              <div className={'aboutHeaderWrapper'}>
                <p className={'aboutWrite'}>Creativity.​</p>
                <Text component={'h2'} textStyle={'copy'}>
                  私達が考えるデザイン
                </Text>
              </div>
              <div className={'aboutLeadWrapper'}>
                <Text component={'p'} textStyle={'lead'}>
                  <span>見た目を整えるだけがデザインではありません。</span>
                  <span>
                    表層的なデザインはそれぞれの思いのアウトプットとしての最後のカタチに過ぎません。
                  </span>
                  <span>
                    私達の考えるデザインは、課題を見つけ解決策を模索し、本質的な価値を具現化していくことです。
                  </span>
                  <span>
                    つまり、本来のデザインとは課題解決のために、要件から表層までの全ての設計をすることです。
                  </span>
                </Text>
              </div>
            </div>

            <div className={'aboutGrid'}>
              <div className={'aboutHeaderWrapper'}>
                <p className={'aboutWrite'}>Why Do.</p>
                <Text component={'h2'} textStyle={'copy'}>
                  なぜ感情をデザインするのか？
                </Text>
              </div>
              <div className={'aboutLeadWrapper'}>
                <Text component={'p'} textStyle={'lead'}>
                  <span>appleがiPhoneを発表した時の事を覚えていますか？</span>
                  <span>
                    スペック的には決して優れていなかったiPhoneが世界中の人々の心を掴み、ワクワクを与え、未来を見せてくれるプロダクトとなりiPhoneは大成功を収めました。
                  </span>
                  <span>
                    思いや感情が世界に与える影響はとても人の心を打ちます。
                  </span>
                  <span>
                    appleがデザインで世界に影響を与えたように、私達もサービスやプロダクトの「感情」をデザインにして世界に影響を与えることが目指すべき姿です。
                  </span>
                </Text>
              </div>
            </div>

            <div className={'aboutGrid'}>
              <div className={'aboutHeaderWrapper'}>
                <p className={'aboutWrite'}>Essence.</p>
                <Text component={'h2'} textStyle={'copy'}>
                  私達が大切にしていること
                </Text>
              </div>

              <div className={'aboutLeadWrapper'}>
                <Text component={'p'} textStyle={'lead'}>
                  <span className={'aboutLeadInWrapper'}>
                    <span>1.本質を突いたデザインを</span>
                    <span>
                      「ドリルを買いにきた人が欲しいのはドリルではなく『穴』である」という言葉があるように、物事のコアである本質を見極め、極限まで突き詰めることで本質を突いたデザインに取り組みます。
                    </span>
                  </span>
                </Text>

                <Text component={'p'} textStyle={'lead'}>
                  <span className={'aboutLeadInWrapper'}>
                    <span>2.共感を呼ぶデザインを</span>
                    <span>
                      使ってくれるユーザーを理解し、ユーザーがどのように行動するのか、身体的および感情的なニーズは何か、世界をどのように考えているのかなどユーザーを理解することで共感を呼ぶデザインに取り組みます。
                    </span>
                  </span>
                </Text>

                <Text component={'p'} textStyle={'lead'}>
                  <span className={'aboutLeadInWrapper'}>
                    <span>3.感情を揺さぶるデザインを</span>
                    <span>
                      デザインされたプロダクトやサービスに触れたユーザーが何を思い、何を感じるのかまでを考えます。ユーザーにとっての最高の体験を突き詰めることで熱狂的なファンになるような感情を揺さぶるデザインに取り組みます。
                    </span>
                  </span>
                </Text>
              </div>
            </div>

            <div className={'aboutHandWriteWrapper'}>
              <img
                className={'aboutHandWrite'}
                src="pages/about/about_handwrite.svg"
                width="420"
                height="120"
              />
            </div>

            <div className={'aboutLinkWrapper'}>
              <Link href={'/services'} routeMatch={false}>
                <figure className={'aboutLinkImage'}>
                  <span className={'aboutLinkCopy'}>私達ができること</span>
                  <span className={'aboutLinkHeading'}>SERVICES</span>
                  <span className={'aboutLinkSubHeading'}>
                    あなたの事業をパートナーとしグロースする２つの事業
                  </span>
                </figure>
              </Link>
            </div>

            <div className={'aboutContactWrapper'}>
              <Text component={'p'} textStyle={'lead'}>
                <span>感情を揺さぶるデザインでこそ、人の心は動きます。</span>
                <span>
                  「Paletto.」では課題の解決という当たり前のその先の、事業やサービスやプロダクトの思いをデザインでカタチにします。
                </span>
                <span>是非私達と一緒に思いをカタチにしませんか？</span>
              </Text>
              <Link href={'/contact'} routeMatch={false}>
                Contact
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </PagesLayout>
  )
}

export default AboutContainer
