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

    <div className="h-full min-h-screen bg-palette-blue-dark text-palette-white">
      <Navbar />
      <div className="flex w-screen justify-center">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  </>
}

export default MyApp
