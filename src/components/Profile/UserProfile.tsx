import { TRANSLATION_KEYS } from '../../i18n/translationKeys'
import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import React from 'react'
import Logout from './Logout'

const UserProfile = () => {
  const { t } = useTranslation()
  const { user, isAuthenticated, isLoading } = useAuth0()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleOpenUserProfile = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleCloseUserProfile = () => {
    setAnchorEl(null)
  }

  if (isLoading) {
    return <Typography>{t(TRANSLATION_KEYS.LOADING)}</Typography>
  }

  return (
    isAuthenticated && (
      <>
        <IconButton onClick={handleOpenUserProfile} size="small">
          <Avatar sx={{ width: 32, height: 32 }}>{user && user.picture}</Avatar>
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseUserProfile}>
          <MenuItem onClick={handleCloseUserProfile} key={user && user.name}>
            <Typography>{user && user.name}</Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseUserProfile} key={user && user.email}>
            <Typography>{user && user.email}</Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseUserProfile}>
            <Avatar sx={{ width: 32, height: 32 }}>{user && user.picture}</Avatar>
          </MenuItem>
          <MenuItem onClick={handleCloseUserProfile}>
            <Logout />
          </MenuItem>
        </Menu>
      </>
    )
  )
}

export default UserProfile
