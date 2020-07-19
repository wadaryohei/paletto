import React from 'react'
import Head from 'next/head'

//----------------------------------
// props
//----------------------------------
export interface HeadProps {
  title: string
  description: string
  pathName: string
}

//----------------------------------
// component
//----------------------------------
export const HeadComponent = (props: HeadProps) => (
  <Head>
    <title>{props.title}</title>
    <meta name="description" content={props.description} />
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width"
    />
    <meta name="format-detection" content="telephone=no" />
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`https://paletto.jp${props.pathName}`} />
    <meta property="og:image" content="https://paletto.jp/og.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.description} />
    <meta name="twitter:url" content={`https://paletto.jp${props.pathName}`} />
    <meta name="twitter:image" content="https://paletto.jp/og.png" />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://indestructibletype-fonthosting.github.io/renner.css"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    <link rel="canonical" href={`https://paletto.jp${props.pathName}`} />
  </Head>
)
