import { useAuth0 } from '@auth0/auth0-react'
import { TRANSLATION_KEYS } from '../../i18n/translationKeys'
import React from 'react'
import { useTranslation } from 'react-i18next'
export default function Home() {
  const { t } = useTranslation()
  const { user, isAuthenticated } = useAuth0()
  return (
    <>
      <h1>{t(TRANSLATION_KEYS.HOME)} </h1>
      <h1>{t(TRANSLATION_KEYS.HELLO, { name: user ? user.name : 'NAME' })} </h1>
    </>
  )
}
