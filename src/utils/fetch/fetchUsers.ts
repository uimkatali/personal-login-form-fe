import { UserData } from '../../types/user'

export const fetchUsersData = async (): Promise<UserData[]> => {
  try {
    const response = await fetch('http://localhost:3001/users')
    if (!response.ok) {
      throw new Error('Network response was not OK!')
    }
    const userData = await response.json()
    return userData
  } catch (error) {
    console.error('Error fetchiong usera data', error)
    return []
  }
}
