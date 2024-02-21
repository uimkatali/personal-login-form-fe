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
import { useTranslation } from 'react-i18next'
import { TRANSLATION_KEYS } from '../../i18n/translationKeys'

interface AboutProps {
  filter: string
}

const Products = ({ filter }: AboutProps) => {
  const { t } = useTranslation()
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
          {t(TRANSLATION_KEYS.NAME)}
          {user.name}
        </Typography>
      </CardContent>
      <Divider orientation="horizontal" variant="middle" flexItem />
      <CardMedia component="img" height="128" loading="lazy" />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {t(TRANSLATION_KEYS.DETAILS)}
          {user.age}
        </Typography>
      </CardContent>
      <Divider orientation="horizontal" variant="fullWidth" flexItem />
      <CardActions>
        <Button sx={{ color: '#9F609C' }} size="small" variant="text">
          {t(TRANSLATION_KEYS.BUYNOW)}
        </Button>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Button sx={{ color: '#9F609C' }} size="small" variant="text">
          {t(TRANSLATION_KEYS.DETAILS)}
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

      {isLoading && (
        <Typography sx={{ color: 'coral' }}> {t(TRANSLATION_KEYS.LOADING)} </Typography>
      )}
    </Grid>
  )
}

export default Products
