import '@/styles/globals.css'
import Header from '../component/Header'

import Footer from '../component/Footer'


// import Font Awesome CSS
// import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
// config.autoAddCss = false

export default function App({ Component, pageProps }) {
  return (

    <>

      <Header />
      <Component {...pageProps} />
      <Footer />



    </>
  )
}
