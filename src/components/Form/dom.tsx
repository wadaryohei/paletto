import React from 'react'
import { Typography } from '@material-ui/core'

//----------------------------------
// props
//----------------------------------
export interface FormProps {
  className?: string
  formAction: string
  formName: string
}

//----------------------------------
// component
//----------------------------------
export const FormComponent = (props: FormProps) => (
  <form
    className={props.className}
    action={'/'}
    name={props.formName}
    method="POST"
    data-netlify="true"
  >
    <input type="hidden" name="form-name" value={props.formName} />
    <ul>
      {/** @name - お名前 */}
      <li>
        <fieldset>
          <p>お名前</p>
          <input type="text" placeholder="姓" name="【姓】" required />
          <span className={'error'}>必須項目です</span>
          <input type="text" placeholder="名" name="【名】" required />
          <span className={'error'}>必須項目です</span>
        </fieldset>
      </li>

      {/** @mailAddress - メールアドレス */}
      <li>
        <label>
          <p>メールアドレス</p>
          <input
            type="text"
            placeholder="yourmail@example.com"
            name="【メールアドレス】"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            required
          />
          <span className={'error'}>必須項目です</span>
          <span className={'error'}>
            正しいメールアドレスを入力してください
          </span>
        </label>
      </li>

      {/** @Details - ご相談内容 */}
      <li>
        <label>
          <p>ご相談内容</p>
          <select name="category" aria-required="true">
            <option selected value="">
              選択してください
            </option>
            <option value="デザインについて">デザインについて</option>
            <option value="開発・制作について">開発・制作について</option>
            <option value="デザインと開発・制作について">
              デザインと開発・制作について
            </option>
          </select>
        </label>
        <span className={'error'}>必須項目です</span>
      </li>

      {/** @Budget - 予算 */}
      <li>
        <label>
          <p>ご予算の上限</p>
          <select name="category" aria-required="true">
            <option selected value="">
              選択してください
            </option>
            <option value="100万円未満">100万円未満</option>
            <option value="100万円">100万円</option>
            <option value="200万円">200万円</option>
            <option value="300万円">300万円</option>
            <option value="400万円">500万円</option>
            <option value="600万円">600万円</option>
            <option value="700万円">700万円</option>
            <option value="800万円">800万円</option>
            <option value="900万円">900万円</option>
            <option value="1000万円">1000万円</option>
            <option value="1000万円以上">1000万円以上</option>
          </select>
        </label>
        <span className={'error'}>必須項目です</span>
      </li>

      {/** @Budget - ご契約形態 */}
      <li>
        <label>
          <p>
            ご契約形態
            <span>
              *
              サブスクリプション契約を採用の場合は「ご予算上限/月12回」を月々お支払いを目安とした契約となります。
            </span>
            <span>* 単発受注契約の場合は通常の契約となります。</span>
          </p>
          <select name="category" aria-required="true">
            <option selected value="">
              選択してください
            </option>
            <option value="サブスクリプション契約">
              サブスクリプション契約
            </option>
            <option value="単発受注契約">単発受注契約</option>
          </select>
        </label>
        <span className={'error'}>必須項目です</span>
      </li>

      {/** @categories - お問い合わせ種別 */}
      <li>
        <label>
          <p>お問い合わせ種別</p>
          <select name="category" aria-required="true">
            <option selected value="">
              選択してください
            </option>
            <option value="新規事業立ち上げのご相談">
              新規事業立ち上げのご相談
            </option>
            <option value="既存サービスの改善のご相談">
              既存サービスの改善のご相談
            </option>
            <option value="業務提携・アライアンスのご相談">
              業務提携・アライアンスのご相談
            </option>
            <option value="取材・講演・イベント登壇などのご依頼">
              取材・講演・イベント登壇などのご依頼
            </option>
          </select>
        </label>
        <span className={'error'}>必須項目です</span>
      </li>

      {/** お問い合わせ種別で「新規事業立ち上げのご相談」と「既存サービスの改善のご相談」を選んだ場合に表示される */}
      <div className={'activeForm'}>
        {/** @company - 会社名 */}
        <li>
          <label>
            <p>会社名</p>
            <input
              type="text"
              placeholder="株式会社〇〇〇〇"
              name="【会社名】"
              required
            />
          </label>
          <span className={'error'}>必須項目です</span>
        </li>

        {/** @company - 知った経緯 */}
        <li>
          <label>
            <p>弊社をお知りになった経緯を教えてください</p>
            <select name="category" aria-required="true">
              <option value="検索で見つけた">検索で見つけた</option>
              <option value="Twitterで知った">Twitterで知った</option>
              <option value="Facebookで知った">Facebookで知った</option>
              <option value="知人の紹介で知った">知人の紹介で知った</option>
            </select>
          </label>
          <span className={'error'}>必須項目です</span>
        </li>

        {/** @request - ご依頼予定のWebサイト、またはアプリストアのURL */}
        <li>
          <label>
            <p>
              ご依頼予定のWebサイトやサービス、またはアプリストアのURL ※任意
            </p>
            <input
              type="text"
              placeholder="https://"
              name="【ご依頼予定のWebサイト、またはアプリストアのURL】"
              required
            />
          </label>
        </li>

        {/** @fixed - 完了期日 */}
        <li>
          <label>
            <p>完了期日の目安(概ねで構いません) ※任意</p>
            <input
              type="text"
              placeholder="20xx年 xx月 xx日"
              name="【完了期日の目安】"
              required
            />
          </label>
          <span className={'error'}>必須項目です</span>
        </li>

        {/** @inquery  音合わせ内容 */}
        <li>
          <label>
            <p>お問い合わせ内容</p>
            <textarea
              rows={6}
              maxLength={4000}
              placeholder="最大4000文字まで"
              name="【お問い合わせ内容】"
              required
            />
          </label>
          <span className={'error'}>必須項目です</span>
        </li>
      </div>
    </ul>
    {/* <button type="submit" className={styles.button}>
      <Button language="ja" displayText="送信" buttonStyle="primary" />
    </button> */}
  </form>
)
