import * as Yup from 'yup'

export interface initValueType {
  firstName: string
  lastName: string
  email: string
  details: string
  budget: string
  contract: string
  categories: string
  company: string
  background: string
  request: string
  fixed: string
  inquery: string
}

export const initValue: initValueType = {
  firstName: '',
  lastName: '',
  email: '',
  details: '',
  budget: '',
  contract: '',
  categories: '',
  company: '',
  background: '',
  request: '',
  fixed: '',
  inquery: '',
}

/**
 * @see https://qiita.com/zaburo/items/9b6dedcfa3f2d26f9f03#%E3%82%84%E3%82%8A%E6%96%B9
 * @see https://nametake.github.io/posts/2019/06/05/formik-yup-dynamic-validation/
 * 動的なフォームに対してvalidationする場合
 */

export const validationSchema = Yup.lazy<any>((values: any) => {
  if (values.categories === '新規事業立ち上げのご相談' || values.categories === '既存サービスの改善のご相談') {
    return Yup.object().shape({
      firstName: Yup.string().required('必須項目です'),
      lastName: Yup.string().required('必須項目です'),
      email: Yup.string().email('正しいメールアドレスを入力してください').required('必須項目です'),
      details: Yup.string().required('必須項目です'),
      budget: Yup.string().required('必須項目です'),
      contract: Yup.string().required('必須項目です'),
      categories: Yup.string().required('必須項目です'),
      company: Yup.string().required('必須項目です'),
      background: Yup.string().required('必須項目です'),
      inquery: Yup.string().max(4000, '本文は4000文字以内で入力してください').required('必須項目です'),
    })
  } else {
    return Yup.object().shape({
      firstName: Yup.string().required('必須項目です'),
      lastName: Yup.string().required('必須項目です'),
      email: Yup.string().email('正しいメールアドレスを入力してください').required('必須項目です'),
      details: Yup.string().required('必須項目です'),
      budget: Yup.string().required('必須項目です'),
      contract: Yup.string().required('必須項目です'),
      categories: Yup.string().required('必須項目です'),
      inquery: Yup.string().max(4000, '本文は4000文字以内で入力してください').required('必須項目です'),
    })
  }
})
