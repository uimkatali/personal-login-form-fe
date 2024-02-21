import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Divider,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from '../Profile/Login'
import Logout from '../Profile/Logout'
import UserProfile from '../Profile/UserProfile'
import SwitchTheme from '../UIMode/SwitchTheme'
import { useTranslation } from 'react-i18next'
import { TRANSLATION_KEYS } from '../../i18n/translationKeys'
import { useAuth0 } from '@auth0/auth0-react'

export default function Navbar() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState('')
  const { isAuthenticated } = useAuth0()

  return (
    <AppBar
      sx={{ background: '#EA8F79', color: '#9F609C', paddingLeft: '3px', paddingRight: '3px' }}
      position="static"
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {t(TRANSLATION_KEYS.NAI)}
        </Typography>
        <ButtonGroup variant="text">
          <Button color="inherit">
            <Link to={'/'}>{t(TRANSLATION_KEYS.HOME)}</Link>
          </Button>
          <Button title="Get more info" color="inherit">
            <Link to={'/about'}>{t(TRANSLATION_KEYS.PRODUCTS)}</Link>
          </Button>
          {isAuthenticated ? <Logout /> : <Login />}
        </ButtonGroup>
        <Box>
          <TextField
            id="standard-basic"
            label="Search..."
            variant="standard"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
        </Box>
        <SwitchTheme />
        <UserProfile />
      </Toolbar>
    </AppBar>
  )
}
