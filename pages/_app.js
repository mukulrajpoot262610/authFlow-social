import { Provider } from 'react-redux'
import 'tailwindcss/tailwind.css'
import '../style/global.css'

import store from '../store/store'
import FirebaseAuthState from '../config/FirebaseAuthState'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <FirebaseAuthState>
          <Component {...pageProps} />
        </FirebaseAuthState>
      </Provider>
    </>
  )
}

export default MyApp
