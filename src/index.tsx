import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './redux/store/store'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'
import UIModeProvider from './components/UIMode/UIModeProvider'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/i18n'
import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@mui/material/styles'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const theme = unstable_createMuiStrictModeTheme()
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
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
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>
)
