import { TRANSLATION_KEYS } from '../../i18n/translationKeys'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Login = () => {
  const { t } = useTranslation()
  const { loginWithRedirect } = useAuth0()
  return <Button onClick={() => loginWithRedirect()}>{t(TRANSLATION_KEYS.LOGIN)}</Button>
}

export default Login
