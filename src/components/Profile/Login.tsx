import { TRANSLATION_KEYS } from '../../i18n/translationKeys'
import { useAuth0 } from '@auth0/auth0-react'
import { Button, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'
import React from 'react'

const Login = () => {
  const { t } = useTranslation()
  const { loginWithRedirect } = useAuth0()
  const theme = useTheme()
  return (
    <Button
      sx={{ color: theme.palette.secondary.main }}
      startIcon={<LoginOutlinedIcon />}
      onClick={() => loginWithRedirect()}
    >
      {t(TRANSLATION_KEYS.LOGIN)}
    </Button>
  )
}

export default Login
