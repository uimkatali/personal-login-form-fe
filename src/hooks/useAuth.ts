import { useAuth0 } from '@auth0/auth0-react'

export const useAuth = () => {
  const { user, isAuthenticated } = useAuth0()
  const namespace = 'http://localhost:3000/roles'

  const roles: string[] = user?.[namespace] || []

  return {
    isAuthenticated,
    roles,
    isAdmin: roles.includes('Admin'),
  }
}
