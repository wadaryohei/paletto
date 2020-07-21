//----------------------------------
// types
//----------------------------------
export interface StringProcessing {
  strToSplit: (str: string) => string[]
}

//----------------------------------
// custom hooks
//----------------------------------
export const useStringProcessing = (): StringProcessing => {
  /**
   * 引数で与えられた文字列を改行コード区切りで配列に変換して返す
   */
  const strToSplit = (str: string): string[] => {
    return str.split('\n')
  }
  return { strToSplit }
}
