import '../styles/globals.css'
import '../styles/S5.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function MyApp({ Component, pageProps }) {
  return <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
