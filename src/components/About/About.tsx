'use client'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { getAllUsers } from '../../api/users'
import { UserData } from '../../types/user'
import React from 'react'
import { MOCK } from '../../MOCKDATA'

const About = () => {
  const [usersList, setUsersList] = useState<UserData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const mockData = MOCK.map(mockItem => mockItem)

  useEffect(() => {
    getAllUsers()
      .then(response => {
        setUsersList(
          response.sort((a, b) => {
            return a.role.localeCompare(b.role)
          })
        )
        setIsLoading(false)
      })
      .catch(error => console.error('Error fetching users: ', error))
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
      <CardMedia component="img" height="128" />
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
  return (
    <Grid container spacing={2} padding={2}>
      {(usersList.length > 0 ? usersList : mockData).map(user => (
        <Grid item key={user._id} xs={3}>
          {cardRender(user)}
        </Grid>
      ))}

      {isLoading && <Typography sx={{ color: 'coral' }}> Loading... </Typography>}
    </Grid>
  )
}

export default About
