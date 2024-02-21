import { TRANSLATION_KEYS } from '../../i18n/translationKeys'
import { useAuth0 } from '@auth0/auth0-react'
import { useTranslation } from 'react-i18next'

const Logout = () => {
  const { t } = useTranslation()
  const { logout } = useAuth0()
  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      {t(TRANSLATION_KEYS.LOGOUT)}
    </button>
  )
}

export default Logout
