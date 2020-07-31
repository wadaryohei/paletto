import React from 'react'
import { AppProps } from 'next/app'
import { AnimatePresence, motion } from 'framer-motion'
import { ParallaxProvider } from 'react-scroll-parallax'
import { ThemeProvider } from '@material-ui/core/styles'
import { GlobalStyle } from '../shared/GlobalStyle'
import { MuiGlobalStyle } from '../shared/MuiGlobalStyle'
import '../shared/styles/style.css'
import { Motion } from '../const/Motion'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ParallaxProvider>
      <GlobalStyle />
      <ThemeProvider theme={MuiGlobalStyle}>
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.div
            key={router.route}
            initial={Motion.initial}
            animate={Motion.animate}
            exit={Motion.exit}
          >
            <Component {...pageProps} key={router.route} />
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </ParallaxProvider>
  )
}

export default MyApp
