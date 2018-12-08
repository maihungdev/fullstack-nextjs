import Document, { Head, Main, NextScript } from 'next/document'

export default class DefaultDocument extends Document {
  static async getInitialProps(props) {
    return await Document.getInitialProps(props)
  }
  render() {
      return (
        <html>
          <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta charSet='utf-8' />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </html>
      )
  }
}