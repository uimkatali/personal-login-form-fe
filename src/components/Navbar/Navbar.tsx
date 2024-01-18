import { AppBar, Button, Divider, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <AppBar sx={{ background: '#EA8F79', color: '#9F609C' }} position="relative">
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
        <Button color="inherit">
          <Link to={'/about'}>About</Link>
        </Button>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Button color="inherit">
          <Link to={'/signup'}>Sign Up</Link>
        </Button>
      </Toolbar>
    </AppBar>
  )
}
