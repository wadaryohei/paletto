import { useRouter } from 'next/router'

//----------------------------------
// types
//----------------------------------
export interface Form {
  showActiveForm: (selectedindex: number) => boolean | undefined
  onSubmitHandler: (path: string) => void
}

//----------------------------------
// custom hooks
//----------------------------------
export const useForm = (): Form => {
  const router = useRouter()

  /**
   * セレクトで1番目と2番目のどちらかを選択している場合はTrueを返す
   */
  const showActiveForm = (selectedindex: number): boolean | undefined => {
    if (selectedindex === 1 || selectedindex === 2) {
      return true
    }
    return
  }

  /**
   * フォームをサブミットしたときの挙動
   */
  const onSubmitHandler = (path: string): void => {
    alert('フォームOK')
    router.push(path)
  }

  return { showActiveForm, onSubmitHandler }
}
