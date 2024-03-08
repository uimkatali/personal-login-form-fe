import { TRANSLATION_KEYS } from '../../i18n/translationKeys'
import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, IconButton, Menu, MenuItem, Typography, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserProfileMenu = () => {
  const { t } = useTranslation()
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } = useAuth0()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const theme = useTheme()
  const navigate = useNavigate()
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
    <>
      <IconButton onClick={handleOpenUserProfile} size="small">
        <Avatar src={user && user.picture} sx={{ width: 32, height: 32 }}></Avatar>
      </IconButton>
      {isAuthenticated ? (
        <Menu
          sx={{
            color: theme.palette.secondary.main,
            '& .MuiPaper-root': { backgroundColor: theme.palette.primary.main },
          }}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseUserProfile}
        >
          <MenuItem
            disabled
            sx={{ color: theme.palette.secondary.main }}
            onClick={handleCloseUserProfile}
            key={user && user.name}
          >
            <Typography sx={{ color: theme.palette.secondary.main }}>
              {user && user.name}
            </Typography>
          </MenuItem>
          <MenuItem
            sx={{ color: theme.palette.secondary.main }}
            onClick={() => {
              navigate('/profile')
              handleCloseUserProfile()
            }}
          >
            {t(TRANSLATION_KEYS.PROFILE)}
          </MenuItem>
          <MenuItem
            sx={{ color: theme.palette.secondary.main }}
            onClick={() => {
              logout()
              handleCloseUserProfile()
            }}
          >
            {t(TRANSLATION_KEYS.LOGOUT)}
          </MenuItem>
        </Menu>
      ) : (
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseUserProfile}>
          <MenuItem
            sx={{ color: theme.palette.secondary.main }}
            onClick={() => loginWithRedirect()}
          >
            {t(TRANSLATION_KEYS.LOGIN)}
          </MenuItem>
        </Menu>
      )}
    </>
  )
}

export default UserProfileMenu
