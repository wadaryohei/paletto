import * as Yup from 'yup'

/**
 * Form Validationで使用するデータ
 */

//----------------------------------
// ValidationDatas
//----------------------------------
export interface Validation {
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

export const initValue: Validation = {
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

export const validationSchema = () =>
  Yup.object().shape({
    firstName: Yup.string().required('必須項目です'),
    lastName: Yup.string().required('必須項目です'),
    email: Yup.string()
      .email('正しいメールアドレスを入力してください')
      .required('必須項目です'),
    details: Yup.string().required('必須項目です'),
    budget: Yup.string().required('必須項目です'),
    contract: Yup.string().required('必須項目です'),
    categories: Yup.string().required('必須項目です'),
    company: Yup.string().required('必須項目です'),
    background: Yup.string().required('必須項目です'),
    inquery: Yup.string().required('必須項目です'),
  })
