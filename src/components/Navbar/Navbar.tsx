import { AppBar, Box, Button, Divider, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from '../Profile/Login'
import Logout from '../Profile/Logout'
import UserProfile from '../Profile/UserProfile'
import SwitchTheme from '../UIMode/SwitchTheme'

export default function Navbar() {
  const [filter, setFilter] = useState('')

  return (
    <AppBar
      sx={{ background: '#EA8F79', color: '#9F609C', paddingLeft: '3px', paddingRight: '3px' }}
      position="relative"
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          #LOGO
        </Typography>
        <Button color="inherit">
          <Link style={{ paddingLeft: '5px' }} to={'/'}>
            Home
          </Link>
        </Button>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Button title="Get more info" color="inherit">
          <Link to={'/about'}>About</Link>
        </Button>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Login />
        <Divider orientation="vertical" variant="middle" flexItem />
        <Logout />
        <Divider orientation="vertical" variant="middle" flexItem />
        <UserProfile />
        <Divider orientation="vertical" variant="middle" flexItem />
        <SwitchTheme />
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box>
          <TextField
            id="standard-basic"
            label="Search..."
            variant="standard"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
        </Box>
      </Toolbar>
    </AppBar>
  )
}
