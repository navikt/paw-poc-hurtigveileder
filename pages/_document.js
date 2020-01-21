import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='no'>
        <Head>
          <link href='images/favicon.ico' rel='icon' type='image/x-icon' />
        </Head>
        <body className='font-body bg-navLysGra'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
