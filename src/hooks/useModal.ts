import { useRouter } from 'next/router'
import { useState } from 'react'
import { initValue, Validation } from '../datas/_shared/ValidationDatas'

//----------------------------------
// types
//----------------------------------
export interface typeModal {
  isOpen: () => boolean
  formContent: () => Validation
  formPassDatasHandler: (formDatas: Validation) => void
  onOpenModalHandler: () => void
  onCloseModalHandler: () => void
  onInquiryEndHandler: (values: Validation) => void
}

//----------------------------------
// custom hooks
//----------------------------------
export const useModal = (): typeModal => {
  const router = useRouter()
  const [_isOpen, setOpen] = useState<boolean>(false)
  const [_formContent, setFormContent] = useState<Validation>(initValue)

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
  const formPassDatasHandler = (formDatas: Validation) => {
    setFormContent(formDatas)
    openModal()
  }

  /**
   * Formの値をPOSTしてモーダルをクローズしてお問い合わせを完了するハンドラー
   */
  const onInquiryEndHandler = (values: Validation): void => {
    onFormPost(values)
    router.push('/thanks')
  }

  /**
   * POSTする時のbodyパラメーター用エンコード
   */
  const bodyEncode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
      )
      .join('&')
  }

  /**
   * FormikではonSubmit時にPOSTしないといけないのでPOSTする関数
   */
  const onFormPost = (values: Validation): Promise<Response> => {
    return fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: bodyEncode({ 'form-name': 'contact', ...values }),
    })
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
    formPassDatasHandler,
    onOpenModalHandler,
    onCloseModalHandler,
    onInquiryEndHandler,
  }
}
