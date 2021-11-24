import '../styles/tailwind.css'
import Head from 'next/head'
import { Navbar } from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Eddie Zhuang</title>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>

    <Navbar />
    <Component {...pageProps} />
  </>
}

export default MyApp
