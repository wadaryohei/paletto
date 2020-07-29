// import React, { useRef } from 'react'
// import { Button } from '../Button'
// import { Formik, Field, Form, ErrorMessage } from 'formik'
// import {
//   initValue,
//   validationSchema,
// } from '../../datas/_shared/ValidationDatas'
// import { typeForm } from '../../hooks/useForm'
// import { typeModal } from '../../hooks/useModal'

import React from 'react'
import { typeForm } from '../../hooks/useForm'
import { typeModal } from '../../hooks/useModal'
import { TestForm } from './test'

//----------------------------------
// props
//----------------------------------
export interface FormProps {
  className?: string
  form: typeForm
  modal: typeModal
}

//----------------------------------
// component
//----------------------------------
// export const FormComponent = (componentProps: FormProps) => {
//   // セレクトで何番目を選んだかを変数として保持する（useStateは再レンダリングされるのでuseRefを使用）
//   const ref = useRef<number>(0)

//   return (
//     <Formik
//       initialValues={initValue}
//       validationSchema={validationSchema}
//       onSubmit={() => {
//         /**
//          * @memo modalでの確認を一旦無しにする
//          */
//         // componentProps.modal.formPassDatas(values)
//         componentProps.modal.onInquiryEndHandler()
//       }}
//     >
//       {(props) => {
//         return (
//           <Form
//             name="contact"
//             method="POST"
//             data-netlify="true"
//             className={componentProps.className}
//           >
//             <ul>
//               <Field type="hidden" name="form-name" value="contact" />

//               {/** @named お名前 */}
//               <li>
//                 <fieldset>
//                   <p>お名前</p>
//                   <Field
//                     name="firstName"
//                     type="text"
//                     placeholder="姓"
//                     onBlur={props.handleBlur}
//                     required
//                   />
//                   <span className={'error'}>
//                     <ErrorMessage name={'firstName'} />
//                   </span>
//                   <Field
//                     name="lastName"
//                     type="text"
//                     placeholder="名"
//                     onBlur={props.handleBlur}
//                     required
//                   />
//                   <span className={'error'}>
//                     <ErrorMessage name={'lastName'} />
//                   </span>
//                 </fieldset>
//               </li>

//               {/** @mailAddress メールアドレス */}
//               <li>
//                 <label>
//                   <p>メールアドレス</p>
//                   <Field
//                     name="email"
//                     type="email"
//                     placeholder="yourmail@example.com"
//                     onBlur={props.handleBlur}
//                     required
//                   />
//                   <span className={'error'}>
//                     <ErrorMessage name={'email'} />
//                   </span>
//                 </label>
//               </li>

//               {/** @details ご相談内容 */}
//               <li>
//                 <label>
//                   <p>ご相談内容</p>
//                   <Field
//                     as="select"
//                     name="details"
//                     onChange={props.handleChange}
//                     onBlur={props.handleBlur}
//                   >
//                     <option value="">選択してください</option>
//                     <option value="デザインについて">デザインについて</option>
//                     <option value="開発・制作について">
//                       開発・制作について
//                     </option>
//                     <option value="デザインと開発・制作について">
//                       デザインと開発・制作について
//                     </option>
//                   </Field>
//                 </label>
//                 <span className={'error'}>
//                   <ErrorMessage name={'details'} />
//                 </span>
//               </li>

//               {/** @budget 予算 */}
//               <li>
//                 <label>
//                   <p>ご予算の上限</p>
//                   <Field
//                     as="select"
//                     name="budget"
//                     onChange={props.handleChange}
//                     onBlur={props.handleBlur}
//                   >
//                     <option value="">選択してください</option>
//                     <option value="100万円未満">100万円未満</option>
//                     <option value="100万円">100万円</option>
//                     <option value="200万円">200万円</option>
//                     <option value="300万円">300万円</option>
//                     <option value="400万円">500万円</option>
//                     <option value="600万円">600万円</option>
//                     <option value="700万円">700万円</option>
//                     <option value="800万円">800万円</option>
//                     <option value="900万円">900万円</option>
//                     <option value="1000万円">1000万円</option>
//                     <option value="1000万円以上">1000万円以上</option>
//                   </Field>
//                 </label>
//                 <span className={'error'}>
//                   <ErrorMessage name={'budget'} />
//                 </span>
//               </li>

//               {/** @contract - ご契約形態 */}
//               <li>
//                 <label>
//                   <p>
//                     ご契約形態
//                     <span>
//                       *
//                       サブスクリプション契約を採用の場合は「ご予算上限/月12回」を月々お支払いを目安とした契約となります。
//                     </span>
//                     <span>* 単発受注契約の場合は通常の契約となります。</span>
//                   </p>
//                   <Field
//                     as="select"
//                     name="contract"
//                     onChange={props.handleChange}
//                     onBlur={props.handleBlur}
//                   >
//                     <option value="">選択してください</option>
//                     <option value="サブスクリプション契約">
//                       サブスクリプション契約
//                     </option>
//                     <option value="単発受注契約">単発受注契約</option>
//                   </Field>
//                 </label>
//                 <span className={'error'}>
//                   <ErrorMessage name={'contract'} />
//                 </span>
//               </li>

//               {/** @categories - お問い合わせ種別 */}
//               <li>
//                 <label>
//                   <p>お問い合わせ種別</p>
//                   <Field
//                     as="select"
//                     name="categories"
//                     onChange={(e: React.ChangeEvent<HTMLFormElement>) => {
//                       /**
//                        * セレクトの選択番号によってフォームの出し分けを行う
//                        */
//                       ref.current = e.target.selectedIndex
//                       props.handleChange(e)
//                     }}
//                     onBlur={props.handleBlur}
//                   >
//                     <option value="">選択してください</option>
//                     <option value="新規事業立ち上げのご相談">
//                       新規事業立ち上げのご相談
//                     </option>
//                     <option value="既存サービスの改善のご相談">
//                       既存サービスの改善のご相談
//                     </option>
//                     <option value="業務提携・アライアンスのご相談">
//                       業務提携・アライアンスのご相談
//                     </option>
//                     <option value="取材・講演・イベント登壇などのご依頼">
//                       取材・講演・イベント登壇などのご依頼
//                     </option>
//                   </Field>
//                 </label>
//                 <span className={'error'}>
//                   <ErrorMessage name={'categories'} />
//                 </span>
//               </li>

//               {/** お問い合わせ種別の内容によって表示する */}
//               {componentProps.form.showActiveForm(ref.current) && (
//                 <div className={'activeForm'}>
//                   {/** @company - 会社名 */}
//                   <li>
//                     <label>
//                       <p>会社名</p>
//                       <Field
//                         name="company"
//                         type="text"
//                         placeholder="株式会社〇〇〇〇"
//                         onChange={props.handleChange}
//                         required
//                       />
//                     </label>
//                     <span className={'error'}>
//                       <ErrorMessage name={'company'} />
//                     </span>
//                   </li>

//                   {/** @background - 知った経緯 */}
//                   <li>
//                     <label>
//                       <p>弊社をお知りになった経緯を教えてください</p>
//                       <Field
//                         as="select"
//                         name="background"
//                         onChange={props.handleChange}
//                         onBlur={props.handleBlur}
//                       >
//                         <option value="">選択してください</option>
//                         <option value="検索で見つけた">検索で見つけた</option>
//                         <option value="Twitterで知った">Twitterで知った</option>
//                         <option value="Facebookで知った">
//                           Facebookで知った
//                         </option>
//                         <option value="知人の紹介で知った">
//                           知人の紹介で知った
//                         </option>
//                       </Field>
//                     </label>
//                     <span className={'error'}>
//                       <ErrorMessage name={'background'} />
//                     </span>
//                   </li>

//                   {/** @request - ご依頼予定のWebサイト、またはアプリストアのURL */}
//                   <li>
//                     <label>
//                       <p>
//                         ご依頼予定のWebサイトやサービス、またはアプリストアのURL
//                         ※任意
//                       </p>
//                       <Field
//                         name="request"
//                         type="text"
//                         placeholder="https://"
//                         onChange={props.handleChange}
//                       />
//                     </label>
//                   </li>

//                   {/** @fixed - 完了期日 */}
//                   <li>
//                     <label>
//                       <p>完了期日の目安(概ねで構いません) ※任意</p>
//                       <Field
//                         name="fixed"
//                         type="text"
//                         placeholder="20xx年 xx月 xx日"
//                         onChange={props.handleChange}
//                       />
//                     </label>
//                   </li>
//                 </div>
//               )}

//               {/** @inquery  お問い合わせ内容 */}
//               <li>
//                 <label>
//                   <p>お問い合わせ内容</p>
//                   <Field
//                     as="textarea"
//                     rows={6}
//                     maxLength={4000}
//                     name="inquery"
//                     placeholder="最大4000文字まで"
//                     onChange={props.handleChange}
//                     required
//                   />
//                 </label>
//                 <span className={'error'}>
//                   <ErrorMessage name={'inquery'} />
//                 </span>
//               </li>
//             </ul>

//             <div className={'formButton'}>
//               <Button
//                 type={'submit'}
//                 color={'primary'}
//                 size={'md'}
//                 disabled={!(props.isValid && props.dirty)}
//               >
//                 この内容で送信
//               </Button>
//             </div>
//           </Form>
//         )
//       }}
//     </Formik>
//   )
// }

export const FormComponent = () => {
  return <TestForm />
}
