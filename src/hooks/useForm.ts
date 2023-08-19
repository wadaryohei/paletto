//----------------------------------
// types
//----------------------------------
export interface IForm {
  showActiveForm: (selectedindex: number) => boolean | undefined
}

//----------------------------------
// custom hooks
//----------------------------------
export const useForm = (): IForm => {
  /**
   * セレクトで1番目と2番目のどちらかを選択している場合はTrueを返す
   */
  const showActiveForm = (selectedindex: number): boolean | undefined => {
    if (selectedindex === 1 || selectedindex === 2) {
      return true
    }
    return
  }

  return { showActiveForm }
}
