import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  
  render () {
    const csp =`default-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; connect-src 'self' https://amplitude.nav.no; object-src 'none'; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com;`
    return (
      <Html lang='no'>
        <Head>
          <meta httpEquiv='Content-Security-Policy' content={csp} />
          <link href='images/favicon.ico' rel='icon' type='image/x-icon' />
        </Head>
        <body className='bg-gray-100'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
