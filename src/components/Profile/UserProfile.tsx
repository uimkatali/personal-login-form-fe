import { TRANSLATION_KEYS } from '../../i18n/translationKeys'
import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, Container, Icon, IconButton, Menu, Typography } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import AccountCircle from '@mui/icons-material/AccountCircle'
import React from 'react'
import { MenuItemData, NestedDropdown } from 'mui-nested-menu'

const UserProfile = () => {
  const { t } = useTranslation()
  const { user, isAuthenticated, isLoading, logout } = useAuth0()
  const [isOpen, setIsOpen] = useState(false)

  if (isLoading) {
    return <Typography>{t(TRANSLATION_KEYS.LOADING)}</Typography>
  }

  const userData: MenuItemData = {
    label: user && user.picture,
    rightIcon: user && user.picture,
    items: [
      {
        label: user && user.name,
      },
      {
        label: user && user.email,
      },
      {
        label: TRANSLATION_KEYS.LOGOUT,
        callback: () => logout({ logoutParams: { returnTo: window.location.origin } }),
      },
    ],
  }

  return (
    isAuthenticated && (
      <>
        <NestedDropdown menuItemsData={userData}></NestedDropdown>
      </>
    )
  )
}

export default UserProfile
