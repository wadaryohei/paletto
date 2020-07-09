import React from 'react'
import { AppProps } from 'next/app'
import '../styles/reset.css'
import '../styles/base.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
