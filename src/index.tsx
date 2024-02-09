import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './redux/store/store'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'
import UIModeProvider from './components/UIMode/UIModeProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-c1za0lb4jcv78nl8.us.auth0.com"
      clientId="xLdfULaYLLtAStTyzTUQCqaNaWWBvUsP"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <Provider store={store}>
        <UIModeProvider>
          <App />
        </UIModeProvider>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
)
