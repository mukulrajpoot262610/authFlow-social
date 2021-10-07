import { Provider } from 'react-redux'
import 'tailwindcss/tailwind.css'
import '../style/global.css'

import store from '../store/store'
import FirebaseAuthState from '../config/FirebaseAuthState'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <FirebaseAuthState>
          <Navbar />
          <Component  {...pageProps} />
          <Footer />
        </FirebaseAuthState>
      </Provider>
    </>
  )
}

export default MyApp
