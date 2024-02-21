import { TRANSLATION_KEYS } from '../../i18n/translationKeys'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Logout = () => {
  const { t } = useTranslation()
  const { logout } = useAuth0()
  return (
    <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      {t(TRANSLATION_KEYS.LOGOUT)}
    </Button>
  )
}

export default Logout
