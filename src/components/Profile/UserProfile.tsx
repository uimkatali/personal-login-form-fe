import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, Typography } from '@mui/material'

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    isAuthenticated && (
      <div>
        <Avatar src={user && user.picture} alt={user && user.name} />
        <Typography variant="h6">{user && user.name}</Typography>
        <Typography variant="body2">{user && user.email}</Typography>
      </div>
    )
  )
}

export default UserProfile
