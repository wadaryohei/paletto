import { useState } from 'react'

//----------------------------------
// types
//----------------------------------
export interface ShowMenu {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

//----------------------------------
// custom hooks
//----------------------------------
export const useShowMenu = (): ShowMenu => {
  const [isOpen, setOpen] = useState<boolean>(false)

  /**
   * メニューをオープンにする
   */
  const onOpen = (): void => {
    setOpen(true)
  }

  /**
   * メニューをクローズにする
   */
  const onClose = (): void => {
    setOpen(false)
  }

  return { isOpen, onOpen, onClose }
}
