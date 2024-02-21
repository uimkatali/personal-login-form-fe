import { TRANSLATION_KEYS } from '../../i18n/translationKeys'
import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, Container, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const UserProfile = () => {
  const { t } = useTranslation()
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>{t(TRANSLATION_KEYS.LOADING)}</div>
  }

  return (
    isAuthenticated && (
      <Container>
        <Avatar src={user && user.picture} alt={user && user.name} />
        <Typography variant="h6">{user && user.name}</Typography>
        <Typography variant="body2">{user && user.email}</Typography>
      </Container>
    )
  )
}

export default UserProfile
