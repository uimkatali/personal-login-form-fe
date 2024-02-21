import { TRANSLATION_KEYS } from '../../i18n/translationKeys'
import { useAuth0 } from '@auth0/auth0-react'
import { useTranslation } from 'react-i18next'

const Login = () => {
  const { t } = useTranslation()
  const { loginWithRedirect } = useAuth0()
  return <button onClick={() => loginWithRedirect()}>{t(TRANSLATION_KEYS.LOGIN)}</button>
}

export default Login
