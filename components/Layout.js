import Head from 'next/head'
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Eddie Zhuang</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
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