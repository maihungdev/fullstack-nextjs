import Head from 'next/head'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'

export default ({ title, children }) =>
  <div>
    <Head>
      <title>{ title }</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
    </Head>
    <style jsx global>{`
      body {
         
      }
    `}</style>
    <LocaleProvider locale={enUS}>
      <div>{children}</div>
    </LocaleProvider>
  </div>