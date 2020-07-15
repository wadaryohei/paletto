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
    twitterPath: '//twitter.com/ryoppei_/',
    facebookPath: '//www.facebook.com/wada.ryohei.3/',
  },
  {
    name: 'MASATO NAKAMURA',
    webSitePath: '//masatonakamura.work/',
    twitterPath: '//twitter.com/_masatojpn/',
    facebookPath: '//www.facebook.com/masato.nakamura.jpn/',
  },
]
