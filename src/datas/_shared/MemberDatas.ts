/**
 * Membersで使用するデータ
 * - コンポーネントに渡す静的なデータを記述する
 */

//----------------------------------
// MemberDatas
//----------------------------------
export interface Member {
  name: string
  webSitePath?: string
  twitterPath?: string
  facebookPath?: string
}

export const MemberDatas: Member[] = [
  {
    name: 'RYOHEI WADA',
    webSitePath: '',
    twitterPath: '',
    facebookPath: '',
  },
  {
    name: 'MASATO NAKAMURA',
    webSitePath: '',
    twitterPath: '',
    facebookPath: '',
  },
]
