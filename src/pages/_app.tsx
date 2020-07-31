import React from 'react'
import { AppProps } from 'next/app'
import { AnimatePresence, motion } from 'framer-motion'
import { ParallaxProvider } from 'react-scroll-parallax'
import { ThemeProvider } from '@material-ui/core/styles'
import { ScrollToTop } from '../components/ScrollToTop/'
import { GlobalStyle } from '../shared/GlobalStyle'
import { MuiGlobalStyle } from '../shared/MuiGlobalStyle'
import '../shared/styles/style.css'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ParallaxProvider>
      <GlobalStyle />
      <ThemeProvider theme={MuiGlobalStyle}>
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.div
            key={router.route}
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: 30,
              transition: {
                ease: [0.86, 0, 0.07, 1],
              },
            }}
          >
            <Component {...pageProps} key={router.route} />
            <ScrollToTop />
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </ParallaxProvider>
  )
}

export default MyApp
