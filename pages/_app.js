import '../styles/globals.css'
import Navbar from '../components/navbar.js'
import { Container } from 'postcss'

function MyApp({ Component, pageProps }) {
  return <div className="h-screen bg-darkBlue text-white">
    <div className="h-screen bg-white container mx-auto max-w-screen-lg">
      <Navbar />
      <Component {...pageProps} />
    </div>
  </div>
}

export default MyApp
