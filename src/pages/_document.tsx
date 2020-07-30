import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { GA_TRACKING_ID } from '../const/Gtag'
import { ServerStyleSheet as StyledComponentSheet } from 'styled-components'
import { ServerStyleSheets as MaterialUiStyleSheets } from '@material-ui/styles'

class MyDocument extends Document {
  /**
   * サーバーサイドレンダリングされる際にstyled-compoentnsとMaterialUIのスタイルが実行されないため、
   * クライアントでReactが実行されてからスタイルが当たるようにする。
   *
   * @see https://nextjs.org/docs/upgrading // ctxの型情報
   * @see https://tgmgli0n.hatenablog.jp/entry/2019/09/17/102615 // styled-compoentnsとMaterialUIのStyleSheetsを入れる書き方
   */
  static async getInitialProps(ctx: DocumentContext) {
    const styledComponentSheet = new StyledComponentSheet() // styled-compoentns
    const materialUiStyleSheets = new MaterialUiStyleSheets() // MaterialUI
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentSheet.collectStyles(
              materialUiStyleSheets.collect(<App {...props} />),
            ),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          initialProps.styles,
          styledComponentSheet.getStyleElement(),
          materialUiStyleSheets.getStyleElement(),
        ],
      }
    } finally {
      styledComponentSheet.seal()
    }
  }

  render() {
    const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GA_TRACKING_ID}');`
    const gtmFrame = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`

    return (
      <Html lang="ja">
        <Head>
          <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
        </Head>
        <body>
          <noscript dangerouslySetInnerHTML={{ __html: gtmFrame }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
