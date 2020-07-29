import { useRouter } from 'next/router'
import { useState } from 'react'
import { initValue, Validation } from '../datas/_shared/ValidationDatas'

//----------------------------------
// types
//----------------------------------
export interface typeModal {
  isOpen: () => boolean
  formContent: () => Validation
  bodyEncode: (data: any) => any
  formPassDatasHandler: (formDatas: Validation) => void
  onOpenModalHandler: () => void
  onCloseModalHandler: () => void
  onInquiryEndHandler: (path: string) => void
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
  const onInquiryEndHandler = (path: string): void => {
    router.push(path)
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
