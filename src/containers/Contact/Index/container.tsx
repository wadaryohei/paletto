import React from 'react'
import { PagesLayout } from '../../../components/_shared/PagesLayout'
import { PageDatas } from '../../../datas/_shared/PageDatas'
import { Form } from '../../../components/Form'
import { Wrapper } from '../../../components/Wrapper'

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
  // render
  //----------------------------------
  return (
    <PagesLayout
      className={props.className}
      pathname={PageDatas.contact.pathname}
      pageHeading={PageDatas.contact.pageHeading}
    >
      <Wrapper>
        {/** @section Form */}
        <Form
          className={'l-contact-form'}
          formAction={'/'}
          formName={'contact'}
        />
      </Wrapper>
    </PagesLayout>
  )
}

export default ContactContainer
