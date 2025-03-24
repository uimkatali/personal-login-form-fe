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
            <div>
              <div className="row align-items-center profile-header">
                <div className="col-md-2 mb-3">
                  <img
                    src={user?.picture}
                    alt="Profile"
                    className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                  />
                </div>
                <div className="col-md text-center text-md-left">
                  <h2>{user?.name}</h2>
                  <p className="lead text-muted">{user?.last_ip}</p>
                </div>
              </div>
              <div className="row">
                <pre className="col-12 text-light bg-dark p-4">{JSON.stringify(user, null, 2)}</pre>
              </div>
            </div>
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
