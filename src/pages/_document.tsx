import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
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
    return (
      <Html lang="ja">
        <Head />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){ window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${process.env.GA_TRACKING_ID}');})`,
          }}
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
