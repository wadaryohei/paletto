import { useRouter } from 'next/router'
import { useState } from 'react'
import { Validation } from '../datas/_shared/ValidationDatas'

//----------------------------------
// types
//----------------------------------
export interface typeModal {
  isOpen: () => boolean
  formContent: () => Validation | undefined
  formPassDatas: (formDatas: Validation) => void
  onOpenModalHandler: () => void
  onCloseModalHandler: () => void
  onInquiryEndHandler: () => void
}

//----------------------------------
// custom hooks
//----------------------------------
export const useModal = (): typeModal => {
  const router = useRouter()
  const [_isOpen, setOpen] = useState<boolean>(false)
  const [_formContent, setFormContent] = useState<Validation>()

  /**
   * モーダルの開閉を管理するステート
   */
  const isOpen = (): boolean => {
    return _isOpen
  }

  /**
   * フォームの値を管理するステート
   */
  const formContent = (): Validation | undefined => {
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
   * モーダルをクローズしてお問い合わせを完了するハンドラー
   */
  const onInquiryEndHandler = (): void => {
    router.push('/thanks')
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

  /**
   * フォームの値をオブジェクトでセット
   */
  const formPassDatas = (formDatas: Validation) => {
    setFormContent(formDatas)
  }

  return {
    isOpen,
    formContent,
    formPassDatas,
    onOpenModalHandler,
    onCloseModalHandler,
    onInquiryEndHandler,
  }
}
