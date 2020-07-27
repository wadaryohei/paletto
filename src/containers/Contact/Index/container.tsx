import React from 'react'
import { PagesLayout } from '../../../components/_shared/PagesLayout'
import { Form } from '../../../components/Form'
import { Wrapper } from '../../../components/Wrapper'
import { Modal } from '../../../components/Modal'
import { useModal } from '../../../hooks/useModal'
import { useForm } from '../../../hooks/useForm'
import { PageDatas } from '../../../datas/_shared/PageDatas'
import { SectionHeader } from './doms/SectionHeader'

//----------------------------------
// props
//----------------------------------
export interface ContactProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
const ContactContainer = (props: ContactProps) => {
  //----------------------------------
  // hooks
  //----------------------------------
  const form = useForm()
  const modal = useModal()

  //----------------------------------
  // render
  //----------------------------------
  return (
    <PagesLayout
      className={props.className}
      pathname={PageDatas.contact.pathname}
      pageHeading={PageDatas.contact.pageHeading}
    >
      {/** @section Modal */}
      <Modal
        open={modal.isOpen()}
        onClose={modal.onCloseModalHandler}
        onInquiryEnd={modal.onInquiryEndHandler}
        formBody={modal.formContent()}
      />

      <Wrapper>
        {/** @section Header */}
        <SectionHeader className={'l-contact-header'} />

        {/** @section Form */}
        <Form className={'l-contact-form'} form={form} modal={modal} />
      </Wrapper>
    </PagesLayout>
  )
}

export default ContactContainer
