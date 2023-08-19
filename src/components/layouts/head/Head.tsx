import React from 'react'
import Head from 'next/head'

//----------------------------------
// props
//----------------------------------
export interface Props {
  title: string
  description: string
  pathname: string
}

//----------------------------------
// component
//----------------------------------
export const Index = (props: Props) => (
  <Head>
    {
      //----------------------------------
      // OGP / Meta
      //----------------------------------
    }
    <title>{props.title}</title>
    <meta name="description" content={props.description} />
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    <meta name="format-detection" content="telephone=no" />
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${process.env.BASE_URL}${props.pathname}`} />
    <meta property="og:image" content={`${process.env.BASE_URL}/og.png`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.description} />
    <meta name="twitter:url" content={`${process.env.BASE_URL}${props.pathname}`} />
    <meta name="twitter:image" content={`${process.env.BASE_URL}/og.png`} />

    {
      //----------------------------------
      // WebFont
      //----------------------------------
    }
    <link rel="stylesheet" href="https://use.typekit.net/tcu7jkw.css" />

    {
      //----------------------------------
      // Favicon
      //----------------------------------
    }
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" href="/android-chrome-256x256.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

    {
      //----------------------------------
      // Site
      //----------------------------------
    }
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="canonical" href={`${process.env.BASE_URL}${props.pathname}`} />

    {
      //----------------------------------
      // Platform Icon
      //----------------------------------
    }
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
  </Head>
)
