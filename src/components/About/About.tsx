import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { getAllUsers } from '../../api/users'
import { UserData } from '../../types/user'
import React from 'react'
import { MOCK } from '../../MOCKDATA'

interface AboutProps {
  filter: string
}

const About = ({ filter }: AboutProps) => {
  const [usersList, setUsersList] = useState<UserData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const mockData = MOCK.map(mockItem => mockItem)

  useEffect(() => {
    setIsLoading(true)
    getAllUsers()
      .then(response => response)
      .then(data => {
        setUsersList(data)
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error fetching users: ', error)
        setIsLoading(false)
      })
  }, [])

  const cardRender = (user: UserData) => (
    <Card
      sx={{
        color: '#F8F1E5',
        background: '#E4D183',
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5">
          {user.name}
        </Typography>
      </CardContent>
      <Divider orientation="horizontal" variant="middle" flexItem />
      <CardMedia component="img" height="128" loading="lazy" />
      <CardContent>
        <Typography gutterBottom variant="h6">
          Descrierea produsului: {user.age}
        </Typography>
      </CardContent>
      <Divider orientation="horizontal" variant="fullWidth" flexItem />
      <CardActions>
        <Button sx={{ color: '#9F609C' }} size="small" variant="text">
          Buy Now
        </Button>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Button sx={{ color: '#9F609C' }} size="small" variant="text">
          Details
        </Button>
      </CardActions>
    </Card>
  )

  const filteredData = usersList.filter(filteredUser =>
    filteredUser.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <Grid container spacing={2} padding={2}>
      {(filteredData.length > 0 ? filteredData : mockData).map(user => (
        <Grid item key={user._id}>
          {cardRender(user)}
        </Grid>
      ))}

      {isLoading && <Typography sx={{ color: 'coral' }}> Loading... </Typography>}
    </Grid>
  )
}

export default About
