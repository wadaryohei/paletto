import { Validation } from '../datas/_shared/ValidationDatas'

//----------------------------------
// types
//----------------------------------
export interface typeForm {
  showActiveForm: (selectedindex: number) => boolean | undefined
  formPost: (values: Validation) => Promise<Response>
}

//----------------------------------
// custom hooks
//----------------------------------
export const useForm = (): typeForm => {
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
  const formPost = (values: Validation): Promise<Response> => {
    return fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: bodyEncode({ 'form-name': 'contact', ...values }),
    })
  }

  return { showActiveForm, formPost }
}
