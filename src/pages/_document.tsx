import React from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet as StyledComponentSheet } from 'styled-components'
import { ServerStyleSheets as MaterialUiStyleSheets } from '@material-ui/styles'
import { GOOGLE_ANALYTICS_ID } from '@/constants/GA'

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
          enhanceApp: (App) => (props) => styledComponentSheet.collectStyles(materialUiStyleSheets.collect(<App {...props} />)),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, styledComponentSheet.getStyleElement(), materialUiStyleSheets.getStyleElement()],
      }
    } finally {
      styledComponentSheet.seal()
    }
  }

  render() {
    return (
      <Html lang="ja">
        <Head />
        {/* Google Analytics 本番環境のみ動作する。ローカル環境で確認したいときは、{process~  をコメントアウトして確認する */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GOOGLE_ANALYTICS_ID}');
                  `,
              }}
            />
          </>
        )}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
