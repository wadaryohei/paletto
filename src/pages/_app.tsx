import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles'
import { GlobalStyle } from '../shared/GlobalStyle'
import { MuiGlobalStyle } from '../shared/MuiGlobalStyle'
import { ScrollToTop } from '../components/ScrollToTop/'
import { ParallaxProvider } from 'react-scroll-parallax'
import '../shared/styles/style.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ParallaxProvider>
        <ScrollToTop />
        <GlobalStyle />
        <ThemeProvider theme={MuiGlobalStyle}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ParallaxProvider>
    </>
  )
}

export default MyApp
