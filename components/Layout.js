import Head from 'next/head'
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Eddie Zhuang</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/atom-one-dark.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.css" integrity="sha384-RZU/ijkSsFbcmivfdRBQDtwuwVqK7GMOw6IMvKyeWL2K5UAlyp6WonmB8m7Jd0Hn" crossOrigin="anonymous"></link>
      </Head>

      <div className="flex flex-col min-h-screen max-w-screen-xl mx-auto px-10">
        <div className="sticky">
          <Navbar />
        </div>
        <div className="flex-1 flex justify-center">
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}