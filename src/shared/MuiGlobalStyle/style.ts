import { createMuiTheme } from '@material-ui/core/styles'

export const MuiGlobalStyle = createMuiTheme({
  typography: {
    fontFamily: [
      '"游ゴシック"',
      'YuGothic',
      '"ヒラギノ角ゴ ProN W3"',
      '"Hiragino Kaku Gothic ProN"',
      '"メイリオ"',
      'Meiryo',
      'sans-serif',
    ].join(','),
  },
})
