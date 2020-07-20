import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles'
import { GlobalStyle } from '../shared/GlobalStyle'
import { MuiGlobalStyle } from '../shared/MuiGlobalStyle'
import '../shared/styles/style.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={MuiGlobalStyle}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
