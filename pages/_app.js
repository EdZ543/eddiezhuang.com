import '../styles/tailwind.css'
import Head from 'next/head'
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Eddie Zhuang</title>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>

    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="flex-1 overflow-y-auto justify-center">
        <Component {...pageProps} />
        <Footer />
      </div>

    </div>
  </>
}

export default MyApp