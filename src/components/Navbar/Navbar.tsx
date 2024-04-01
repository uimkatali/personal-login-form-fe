import { AppBar, Box, Button, ButtonGroup, TextField, Toolbar, Typography } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../Profile/Login'
import UserProfileMenu from '../Profile/UserProfileMenu'
import SwitchTheme from '../UIMode/SwitchTheme'
import { useTranslation } from 'react-i18next'
import { TRANSLATION_KEYS } from '../../i18n/translationKeys'
import { useAuth0 } from '@auth0/auth0-react'
import { useTheme } from '@mui/material'

export default function Navbar() {
  const { t } = useTranslation()
  const theme = useTheme()
  // const [filter, setFilter] = useState('')
  const { isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  return (
    <AppBar
      sx={{
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary.main,
      }}
      position="fixed"
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: theme.palette.secondary.main }}
        >
          {t(TRANSLATION_KEYS.NAI)}
        </Typography>
        <ButtonGroup variant="text">
          <Button sx={{ color: theme.palette.secondary.main }} onClick={() => navigate('/')}>
            {t(TRANSLATION_KEYS.HOME)}
          </Button>
          <Button
            title="Get more info"
            sx={{ color: theme.palette.secondary.main }}
            onClick={() => navigate('/about')}
          >
            {t(TRANSLATION_KEYS.PRODUCTS)}
          </Button>
          <Button sx={{ color: theme.palette.secondary.main }} onClick={() => navigate('/details')}>
            {t(TRANSLATION_KEYS.DETAILS)}
          </Button>
          {!isAuthenticated && <Login />}
        </ButtonGroup>
        {/* <Box>
          <TextField
            id="standard-basic"
            label="Search..."
            variant="filled"
            value={filter}
            sx={{ color: theme.palette.secondary.main }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter(e.target.value)}
          />
        </Box> */}
        <SwitchTheme />
        <UserProfileMenu />
      </Toolbar>
    </AppBar>
  )
}
