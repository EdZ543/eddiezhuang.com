import Head from 'next/head'
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import Button from '../components/Button'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Eddie Zhuang</title>
        <link rel="shortcut icon" type="image/svg" href="/logo.svg"/>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/atom-one-dark.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.css" integrity="sha384-RZU/ijkSsFbcmivfdRBQDtwuwVqK7GMOw6IMvKyeWL2K5UAlyp6WonmB8m7Jd0Hn" crossOrigin="anonymous"></link>
      </Head>

      <div className="h-full flex flex-col mx-auto max-w-6xl px-2">
        <div className="sticky">
          <Navbar />
        </div>
        <div className="flex flex-1 justify-center">
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}