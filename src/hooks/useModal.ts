import { useRouter } from 'next/router'
import { useState } from 'react'
import { initValue, initValueType } from '../datas/_shared/ValidationDatas'
import { FormikHelpers } from 'formik'

//----------------------------------
// types
//----------------------------------
export interface typeModal {
  isOpen: () => boolean
  formContent: () => initValueType
  bodyEncode: (data: any) => any
  formPassDatasHandler: (formDatas: initValueType, actions: FormikHelpers<initValueType>) => void
  onOpenModalHandler: () => void
  onCloseModalHandler: () => void
  onInquiryEndHandler: (formBody: initValueType) => void
}

//----------------------------------
// custom hooks
//----------------------------------
export const useModal = (): typeModal => {
  const router = useRouter()
  const [_isOpen, setOpen] = useState<boolean>(false)
  const [_formContent, setFormContent] = useState<initValueType>(initValue)
  const [_formAction, setFormAction] = useState<FormikHelpers<initValueType>>()

  /**
   * モーダルの開閉を管理するステート
   */
  const isOpen = (): boolean => {
    return _isOpen
  }

  /**
   * フォームの値を管理するステート
   */
  const formContent = (): initValueType => {
    return _formContent
  }

  /**
   * モーダルをオープンするハンドラー
   */
  const onOpenModalHandler = (): void => {
    openModal()
  }

  /**
   * モーダルをクローズするハンドラー
   */
  const onCloseModalHandler = (): void => {
    closeModal()
  }

  /**
   * フォームの値をオブジェクトでセットしてmodalをオープンするハンドラー
   */
  const formPassDatasHandler = (formDatas: initValueType, actions: FormikHelpers<initValueType>) => {
    setFormAction(actions)
    setFormContent(formDatas)
    openModal()
  }

  /**
   * Formの値をPOSTしてモーダルをクローズしてお問い合わせを完了するハンドラー
   */
  const onInquiryEndHandler = (formBody: initValueType): void => {
    fetch('/api/slack', {
      method: 'POST',
      mode: 'same-origin',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(formBody),
    })
      .catch(() => {
        alert('送信に失敗しました。再度送信お願い致します。')
        router.push('/contact')
      })
      .finally(() => {
        router.replace('/thanks')
        _formAction?.setSubmitting(false)
      })
  }

  /**
   * POSTする時のbodyパラメーター用エンコード
   */
  const bodyEncode = (data: any): any => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  /**
   * モーダルをオープンする
   */
  const openModal = (): void => {
    setOpen(true)
  }

  /**
   * モーダルをクローズ
   */
  const closeModal = (): void => {
    setOpen(false)
  }

  return {
    isOpen,
    formContent,
    bodyEncode,
    formPassDatasHandler,
    onOpenModalHandler,
    onCloseModalHandler,
    onInquiryEndHandler,
  }
}
