import React from 'react'
import { Dialog } from '@material-ui/core'
import { Typography } from '../Typography'
import { FormButton } from '../Button'
import { initValueType } from '../../datas/_shared/ValidationDatas'

//----------------------------------
// props
//----------------------------------
export interface ModalProps {
  className?: string
  open: boolean
  onClose: () => void
  onInquiryEnd: (formBody: initValueType) => void
  formBody: initValueType
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
      <div>
        <Typography
          component={'h1'}
          variant={'heading'}
          size={'sm'}
          weight={'bold'}
          className={'modalHeader'}
        >
          この内容で送信しますか？
        </Typography>
      </div>

      <div className={'modalContentsWrapper'}>
        <ul>
          <li>
            <Typography
              component={'span'}
              variant={'subheading'}
              size={'sm'}
              colors={'black'}
              weight={'bold'}
            >
              姓
            </Typography>
            <Typography component={'p'} variant={'lead'} size={'sm'}>
              {props.formBody?.firstName}
            </Typography>
          </li>
          <li>
            <Typography
              component={'span'}
              variant={'subheading'}
              size={'sm'}
              colors={'black'}
              weight={'bold'}
            >
              名
            </Typography>
            <Typography component={'p'} variant={'lead'} size={'sm'}>
              {props.formBody?.lastName}
            </Typography>
          </li>
          <li>
            <Typography
              component={'span'}
              variant={'subheading'}
              size={'sm'}
              colors={'black'}
              weight={'bold'}
            >
              メールアドレス
            </Typography>
            <Typography component={'p'} variant={'lead'} size={'sm'}>
              {props.formBody?.email}
            </Typography>
          </li>
          <li>
            <Typography
              component={'span'}
              variant={'subheading'}
              size={'sm'}
              colors={'black'}
              weight={'bold'}
            >
              ご相談内容
            </Typography>
            <Typography component={'p'} variant={'lead'} size={'sm'}>
              {props.formBody?.details}
            </Typography>
          </li>
          <li>
            <Typography
              component={'span'}
              variant={'subheading'}
              size={'sm'}
              colors={'black'}
              weight={'bold'}
            >
              ご予算の上限
            </Typography>
            <Typography component={'p'} variant={'lead'} size={'sm'}>
              {props.formBody?.budget}
            </Typography>
          </li>
          <li>
            <Typography
              component={'span'}
              variant={'subheading'}
              size={'sm'}
              colors={'black'}
              weight={'bold'}
            >
              ご契約形態
            </Typography>
            <Typography component={'p'} variant={'lead'} size={'sm'}>
              {props.formBody?.contract}
            </Typography>
          </li>
          <li>
            <Typography
              component={'span'}
              variant={'subheading'}
              size={'sm'}
              colors={'black'}
              weight={'bold'}
            >
              お問い合わせ種別
            </Typography>
            <Typography component={'p'} variant={'lead'} size={'sm'}>
              {props.formBody?.categories}
            </Typography>
          </li>
          {props.formBody?.company && (
            <li>
              <Typography
                component={'span'}
                variant={'subheading'}
                size={'sm'}
                colors={'black'}
                weight={'bold'}
              >
                会社名
              </Typography>
              <Typography component={'p'} variant={'lead'} size={'sm'}>
                {props.formBody?.company}
              </Typography>
            </li>
          )}
          {props.formBody?.background && (
            <li>
              <Typography
                component={'span'}
                variant={'subheading'}
                size={'sm'}
                colors={'black'}
                weight={'bold'}
              >
                知った経緯
              </Typography>
              <Typography component={'p'} variant={'lead'} size={'sm'}>
                {props.formBody?.background}
              </Typography>
            </li>
          )}
          {props.formBody?.request && (
            <li>
              <Typography
                component={'span'}
                variant={'subheading'}
                size={'sm'}
                colors={'black'}
                weight={'bold'}
              >
                ご依頼予定のWebサイト、またはアプリストアのURL ※任意
              </Typography>
              <Typography component={'p'} variant={'lead'} size={'sm'}>
                {props.formBody?.request}
              </Typography>
            </li>
          )}
          {props.formBody?.fixed && (
            <li>
              <Typography
                component={'span'}
                variant={'subheading'}
                size={'sm'}
                colors={'black'}
                weight={'bold'}
              >
                完了期日の目安(概ねで構いません) ※任意
              </Typography>
              <Typography component={'p'} variant={'lead'} size={'sm'}>
                {props.formBody?.fixed}
              </Typography>
            </li>
          )}
          <li>
            <Typography
              component={'span'}
              variant={'subheading'}
              size={'sm'}
              colors={'black'}
              weight={'bold'}
            >
              お問い合わせ内容
            </Typography>
            <Typography component={'p'} variant={'lead'} size={'sm'}>
              {props.formBody?.inquery}
            </Typography>
          </li>
        </ul>
      </div>

      <div className={'modalFooterWrapepr'}>
        <FormButton
          size={'md'}
          color={'border'}
          onClick={() => props.onClose()}
        >
          Cancel
        </FormButton>
        <FormButton
          size={'md'}
          color={'primary'}
          onClick={() => props.onInquiryEnd(props.formBody)}
        >
          OK
        </FormButton>
      </div>
    </div>
  </Dialog>
)
