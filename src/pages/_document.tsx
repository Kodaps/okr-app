import { Header } from '@/components/Header'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='dark:bg-slate-900 dark:text-slate-200 text-gray-900 bg-white'>
        <Header/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
