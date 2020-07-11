import React from 'react'
import { Box, Container } from '@material-ui/core'
import { Section } from '../../components/Section'
import { Text } from '../../components/Text'
import { Margin } from '../../const/Margin'

//----------------------------------
// props
//----------------------------------
export interface SectionVisionProps {
  className?: string
}

export interface SectionWhyEmotionalBgProps {
  className?: string
}

export interface SectionWhyEmotionalProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------

/** @section Vision */
export const SectionVisionComponent = (props: SectionVisionProps) => (
  <Section className={props.className}>
    <Text component={'h2'} textStyle={'heading'}>
      Vision
    </Text>
    <Text component={'p'} textStyle={'copy'}>
      感情を動かすデザインを
    </Text>
    <Text component={'p'} textStyle={'lead'}>
      <span>人の感情に寄り添い、人の感情をデザインする。</span>
      <span>
        そんな「エモーショナルなデザイン」をすることが私達のVisionです。
      </span>
      <span>感情を揺さぶるデザインでこそ、人の心は動きます。</span>
      <span>
        「Paletto.」では課題の解決だけでなく、事業やサービスやプロダクトの思いをデザインでカタチにします。
      </span>
    </Text>
  </Section>
)

/** @section Why Emotional Bg */
export const SectionWhyEmotionalBgComponent = (
  props: SectionWhyEmotionalBgProps,
) => (
  <Section className={props.className}>
    <Box className={'box'}>
      <Text component={'h2'} textStyle={'accentheading'}>
        Why Emotional
      </Text>
    </Box>
  </Section>
)

/** @section Why Emotional */
export const SectionWhyEmotionalComponent = (
  props: SectionWhyEmotionalProps,
) => (
  <Box
    className={props.className}
    style={{ backgroundImage: 'url(/whyemotional.png)' }}
  >
    <Container>
      <Section>
        <Text component={'h2'} textStyle={'heading'}>
          Why Emotional
        </Text>
        <Text component={'p'} textStyle={'copy'}>
          感情をデザインするということ
        </Text>

        <Box mt={Margin.m72}>
          <Text component={'p'} textStyle={'subheading'}>
            なぜエモーショナルなのか？
          </Text>
          <Box mt={Margin.m40}>
            <Text component={'p'} textStyle={'lead'}>
              <span>
                デザインにおいて「課題解決」や「ユーザビリティ」が大事なのは明白です。
              </span>
              <span>
                ですが、そういったことが当たり前になりつつある世界ではどうでしょうか？
              </span>
              <span>それだけでは充分と言えません。</span>
              <span>
                また、人が物やサービスを使おうと思うのは何故でしょうか？
              </span>
              <span>そこには必ず「感情」が存在します。</span>
            </Text>
          </Box>
        </Box>

        <Box mt={Margin.m72}>
          <Text component={'p'} textStyle={'subheading'}>
            感情をデザインすること
          </Text>
          <Box mt={Margin.m40}>
            <Text component={'p'} textStyle={'lead'}>
              <span>人は「感情」に基づき行動する生き物です。</span>
              <span>感情が変われば、思考と行動が変わります。</span>
              <span>
                感情をデザインすることで、「人や組織、プロダクトやサービス」を最高のモノへと変えていくことが可能だと考えています。
              </span>
            </Text>
          </Box>
        </Box>
      </Section>
    </Container>
  </Box>
)
