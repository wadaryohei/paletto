import React from 'react'
import styled from 'styled-components'
import { Head } from '@/components/layouts/head'
import { HeadDatas } from '@/datas/HeadDatas'
import { Section } from '@/components/layouts/section'
import { Typography } from '@/components/elements/typography'
import { LinkButton } from '@/components/elements/button'
import { Margin } from '@/constants/Margin'

//----------------------------------
// style
//----------------------------------
export const ThankStyle = styled.div`
  text-align: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .thanksButtonWrapper {
    display: block;
    margin-top: ${Margin.m32};
  }
`

//----------------------------------
// component
//----------------------------------
const Thanks = () => (
  <ThankStyle>
    <Head title={HeadDatas.thanks.title} description={HeadDatas.thanks.description} pathname={HeadDatas.thanks.pathname} />
    <Section>
      <div className={'thanksHeaderWrapper'}>
        <Typography component={'h2'} variant={'heading'} size={'md'}>
          Thanks
        </Typography>
        <Typography component={'p'} variant={'lead'}>
          <span>お問い合わせありがとうございます。</span>
          <span>2~3日以内にお返事致しますのでもうしばらくお待ちくださいませ。</span>
        </Typography>

        <Typography component={'p'} variant={'lead'} size={'xs'}>
          ※2~3日経過しても返事が無い場合はお手数ですが再度ご連絡いただけますと幸いでございます。
        </Typography>

        <div className={'thanksButtonWrapper'}>
          <LinkButton href={'/'} routeMatch={false} size={'md'} color={'primary'}>
            TOPに戻る
          </LinkButton>
        </div>
      </div>
    </Section>
  </ThankStyle>
)

export default Thanks
