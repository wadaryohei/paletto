import { createMuiTheme } from '@material-ui/core/styles'

export const MuiGlobalStyle = createMuiTheme({
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      'Arial',
      '"Hiragino Kaku Gothic ProN"',
      '"Hiragino Sans"',
      '"Helvetica Neue"',
      'Meiryo',
      'sans-serif',
    ].join(','),
  },
})
