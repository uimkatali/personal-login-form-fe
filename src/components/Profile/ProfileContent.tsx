import { TRANSLATION_KEYS } from '../../i18n/translationKeys'
import { User, useAuth0 } from '@auth0/auth0-react'
import { Container, Grid, Typography } from '@mui/material'
import useTheme from '@mui/material/styles/useTheme'
import { useTranslation } from 'react-i18next'

const ProfileContent = () => {
  const { t } = useTranslation()
  const { user } = useAuth0()
  const theme = useTheme()

  return (
    <Container>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid
          xs={6}
          item
          sx={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <Typography>{t(TRANSLATION_KEYS.NAME)}</Typography>
          <Typography>{user && user.name}</Typography>
        </Grid>
        <Grid xs={6} item sx={{ display: 'flex', flexDirection: 'row' }}>
          <Typography>{t(TRANSLATION_KEYS.NAME)}</Typography>
          <Typography>{user && user.nickname}</Typography>
        </Grid>
        <Grid xs={6} item sx={{ display: 'flex', flexDirection: 'row' }}>
          <Typography>{t(TRANSLATION_KEYS.NAME)}</Typography>
          <Typography>{user && user.birthdate}</Typography>
        </Grid>
        <Grid xs={6} item sx={{ display: 'flex', flexDirection: 'row' }}>
          <Typography>{t(TRANSLATION_KEYS.NAME)}</Typography>
          <Typography>{user && user.email}</Typography>
        </Grid>
        <Grid xs={6} item sx={{ display: 'flex', flexDirection: 'row' }}>
          <Typography>{t(TRANSLATION_KEYS.NAME)}</Typography>
          <Typography>{user && user.email_verified}</Typography>
        </Grid>
        <Grid xs={6} item sx={{ display: 'flex', flexDirection: 'row' }}>
          <Typography>{t(TRANSLATION_KEYS.NAME)}</Typography>
          <Typography>{user && user.family_name}</Typography>
        </Grid>
        <Grid xs={6} item sx={{ display: 'flex', flexDirection: 'row' }}>
          <Typography>{t(TRANSLATION_KEYS.NAME)}</Typography>
          <Typography>{user && user.given_name}</Typography>
        </Grid>
        <Grid xs={6} item sx={{ display: 'flex', flexDirection: 'row' }}>
          <Typography>{t(TRANSLATION_KEYS.NAME)}</Typography>
          <Typography>{user && user.gender}</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProfileContent
