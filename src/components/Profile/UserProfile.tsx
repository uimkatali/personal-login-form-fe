import { useAuth0 } from '@auth0/auth0-react'

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user && user.picture} alt={user && user.name} />
        <h2>{user && user.name}</h2>
        <h1>{user && user.email}</h1>
      </div>
    )
  )
}

export default UserProfile
