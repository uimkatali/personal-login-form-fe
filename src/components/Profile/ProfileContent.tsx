import { TRANSLATION_KEYS } from '../../i18n/translationKeys'
import { useAuth0 } from '@auth0/auth0-react'
import { Container, Grid, Paper, Typography } from '@mui/material'
import useTheme from '@mui/material/styles/useTheme'
import React from 'react'
import { useTranslation } from 'react-i18next'

const ProfileContent = () => {
  const { t } = useTranslation()
  const { user } = useAuth0()
  const theme = useTheme()

  return (
    <Container>
      <Grid container spacing={4} padding={2}>
        <Grid item sm={4}>
          <Paper
            sx={{
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <Typography>{t(TRANSLATION_KEYS.NAME)}</Typography>
            <Typography>{user?.name}</Typography>
          </Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper
            sx={{
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <Typography>{t(TRANSLATION_KEYS.NAME)}</Typography>
            <Typography>{user?.name}</Typography>
          </Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper
            sx={{
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <Typography>{t(TRANSLATION_KEYS.NAME)}</Typography>
            <Typography>{user?.name}</Typography>
          </Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper
            sx={{
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <Typography>{t(TRANSLATION_KEYS.NAME)}</Typography>
            <Typography>{user?.name}</Typography>
          </Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper
            sx={{
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <Typography>{t(TRANSLATION_KEYS.NAME)}</Typography>
            <Typography>{user?.name}</Typography>
          </Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper
            sx={{
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <Typography>{t(TRANSLATION_KEYS.NAME)}</Typography>
            <Typography>{user?.name}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProfileContent
