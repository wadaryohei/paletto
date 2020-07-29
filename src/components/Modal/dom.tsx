import React from 'react'
import { Dialog } from '@material-ui/core'
import { Validation } from '../../datas/_shared/ValidationDatas'
import { Typography } from '../Typography'
import { Button } from '../Button'

//----------------------------------
// props
//----------------------------------
export interface ModalProps {
  className?: string
  open: boolean
  onClose: () => void
  onInquiryEnd: () => void
  formBody: Validation | undefined
}

//----------------------------------
// component
//----------------------------------
export const ModalComponent = (props: ModalProps) => (
  <Dialog
    open={props.open}
    onClose={props.onClose}
    className={props.className}
    PaperProps={{
      style: {
        maxWidth: '840px',
        margin: '8px',
        padding: '0',
      },
    }}
  >
    <div className={'modalWrapper'}>
      <div className={'modalHeaderWrapper'}>
        <Typography
          component={'h1'}
          variant={'heading'}
          className={'modalHeader'}
        >
          この内容で送信しますか？
        </Typography>
      </div>

      <div className={'modalContentsWrapper'}>
        <ul>
          <li>
            <span>姓</span>
            <p>{props.formBody?.firstName}</p>
          </li>
          <li>
            <span>名</span>
            <p>{props.formBody?.lastName}</p>
          </li>
          <li>
            <span>メールアドレス</span>
            <p>{props.formBody?.email}</p>
          </li>
          <li>
            <span>ご相談内容</span>
            <p>{props.formBody?.details}</p>
          </li>
          <li>
            <span>ご予算の上限</span>
            <p>{props.formBody?.budget}</p>
          </li>
          <li>
            <span>ご契約形態</span>
            <p>{props.formBody?.contract}</p>
          </li>
          <li>
            <span>お問い合わせ種別</span>
            <p>{props.formBody?.categories}</p>
          </li>
          {props.formBody?.company && (
            <li>
              <span>会社名</span>
              <p>{props.formBody?.company}</p>
            </li>
          )}
          {props.formBody?.background && (
            <li>
              <span>知った経緯</span>
              <p>{props.formBody?.background}</p>
            </li>
          )}
          {props.formBody?.request && (
            <li>
              <span>ご依頼予定のWebサイト、またはアプリストアのURL ※任意</span>
              <p>{props.formBody?.request}</p>
            </li>
          )}
          {props.formBody?.fixed && (
            <li>
              <span>完了期日の目安(概ねで構いません) ※任意</span>
              <p>{props.formBody?.fixed}</p>
            </li>
          )}
          <li>
            <span>お問い合わせ内容</span>
            <p>{props.formBody?.inquery}</p>
          </li>
        </ul>
      </div>

      <div className={'modalFooterWrapepr'}>
        <Button size={'md'} color={'border'}>
          Cancel
        </Button>
        <Button size={'md'} color={'primary'}>
          OK
        </Button>
      </div>
    </div>
  </Dialog>
)
