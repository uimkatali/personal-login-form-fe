import { useAuth0 } from '@auth0/auth0-react'
import { Typography } from '@mui/material'

export const Logout = () => {
  const { logout } = useAuth0()
  const handleLogout = async () => {
    await logout()
  }

  handleLogout()

  return <Typography sx={{ color: theme.palette.secondary.main }}>Logging out...</Typography>
}
