import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import Head from 'next/head'

const poppins = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <Head>
        <title>Europea Cidadanias</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
