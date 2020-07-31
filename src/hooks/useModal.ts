import { useRouter } from 'next/router'
import { useState } from 'react'
import { initValue, Validation } from '../datas/_shared/ValidationDatas'
import { FormikHelpers } from 'formik'

//----------------------------------
// types
//----------------------------------
export interface typeModal {
  isOpen: () => boolean
  formContent: () => Validation
  bodyEncode: (data: any) => any
  formPassDatasHandler: (
    formDatas: Validation,
    actions: FormikHelpers<Validation>,
  ) => void
  onOpenModalHandler: () => void
  onCloseModalHandler: () => void
  onInquiryEndHandler: (formBody: Validation) => void
}

//----------------------------------
// custom hooks
//----------------------------------
export const useModal = (): typeModal => {
  const router = useRouter()
  const [_isOpen, setOpen] = useState<boolean>(false)
  const [_formContent, setFormContent] = useState<Validation>(initValue)
  const [_formAction, setFormAction] = useState<FormikHelpers<Validation>>()

  /**
   * モーダルの開閉を管理するステート
   */
  const isOpen = (): boolean => {
    return _isOpen
  }

  /**
   * フォームの値を管理するステート
   */
  const formContent = (): Validation => {
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
  const formPassDatasHandler = (
    formDatas: Validation,
    actions: FormikHelpers<Validation>,
  ) => {
    setFormAction(actions)
    setFormContent(formDatas)
    openModal()
  }

  /**
   * Formの値をPOSTしてモーダルをクローズしてお問い合わせを完了するハンドラー
   */
  const onInquiryEndHandler = (formBody: Validation): void => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: bodyEncode({
        'form-name': 'contact',
        ...formBody,
      }),
    })
      .then(() => {
        _formAction?.resetForm()
      })
      .catch(() => {
        alert('送信に失敗しました。再度送信お願い致します。')
        router.push('/contact')
      })
      .finally(() => {
        router.push('/thanks').then(() => {
          window.scroll(0, 0)
        })
        _formAction?.setSubmitting(false)
      })
  }

  /**
   * POSTする時のbodyパラメーター用エンコード
   */
  const bodyEncode = (data: any): any => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
      )
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
