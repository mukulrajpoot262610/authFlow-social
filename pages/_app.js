import { Provider } from 'react-redux'
import 'tailwindcss/tailwind.css'
import '../style/global.css'

import store from '../store/store'
import FirebaseAuthState from '../config/FirebaseAuthState'
import Layout from '../components/Layout'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <FirebaseAuthState>
          <Layout>
            <Component  {...pageProps} />
          </Layout>
        </FirebaseAuthState>
      </Provider>
    </>
  )
}

export default MyApp
