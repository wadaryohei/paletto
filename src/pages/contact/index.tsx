import React from 'react'
import styled from 'styled-components'
import { Head } from '@/components/layouts/head'
import { HeadDatas } from '@/datas/HeadDatas'
import { PagesLayout } from '@/components/layouts/pages'
import { Form } from '@/components/elements/form'
import { Wrapper } from '@/components/layouts/wrapper'
import { Modal } from '@/components/elements/modal'
import { useModal } from '@/hooks/useModal'
import { useForm } from '@/hooks/useForm'
import { PageDatas } from '@/datas/PageDatas'
import { Section } from '@/components/layouts/section'
import { Typography } from '@/components/elements/typography'
import { Colors } from '@/constants/Colors'
import { Padding } from '@/constants/Padding'
import { Margin } from '@/constants/Margin'
import { BreakPoints, max } from '@/constants/BreakPoints'

//--------------------------------------
// style
//--------------------------------------
export const ContactStyle = styled.div`
  background-color: ${Colors.smokeGray};

  .l-contact-header {
    margin-bottom: ${Margin.m64};
  }
  .l-contact-form {
    padding: 0 ${Padding.p112};

    @media ${max(BreakPoints.md)} {
      padding: 0;
    }
  }

  .contactHeaderWrapper {
    text-align: center;
  }
`

//----------------------------------
// component
//----------------------------------
const Contact = () => {
  const form = useForm()
  const modal = useModal()

  return (
    <ContactStyle>
      <Head title={HeadDatas.contact.title} description={HeadDatas.contact.description} pathname={HeadDatas.contact.pathname} />
      <PagesLayout pathname={PageDatas.contact.pathname} pageHeading={PageDatas.contact.pageHeading}>
        {/** @section Modal */}
        <Modal
          open={modal.isOpen()}
          onClose={modal.onCloseModalHandler}
          onInquiryEnd={modal.onInquiryEndHandler}
          formBody={modal.formContent()}
        />

        <Wrapper>
          {/** @section Header */}
          <Section className={'l-contact-header'}>
            <div className={'contactHeaderWrapper'}>
              <Typography component={'h2'} variant={'heading'} size={'md'}>
                Contact
              </Typography>
              <Typography component={'p'} variant={'lead'}>
                パートナー様のお問い合わせをお待ちしております。
              </Typography>
            </div>
          </Section>

          {/** @section Form */}
          <Form className={'l-contact-form'} form={form} modal={modal} />
        </Wrapper>
      </PagesLayout>
    </ContactStyle>
  )
}

export default Contact
