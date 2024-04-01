import { useAuth0 } from '@auth0/auth0-react'
import { Typography, useTheme } from '@mui/material'
import React from 'react'

export const Logout = () => {
  const { logout } = useAuth0()
  const theme = useTheme()
  const handleLogout = async () => {
    await logout()
  }

  handleLogout()

  return <Typography sx={{ color: theme.palette.secondary.main }}>Logging out...</Typography>
}
