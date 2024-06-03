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
import { getAllUsers } from '../../api/users'
import { UserData } from '../../types/user'
import { MOCK } from '../../MOCKDATA'
import { useTranslation } from 'react-i18next'
import { TRANSLATION_KEYS } from '../../i18n/translationKeys'
import { generateUniqueKey } from '../../utils/generateUniqueKey'
import useTheme from '@mui/material/styles/useTheme'
import { useEffect, useState } from 'react'
import React from 'react'

interface AboutProps {
  filter: string
}

const Products = ({ filter }: AboutProps) => {
  const { t } = useTranslation()
  const [usersList, setUsersList] = useState<UserData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const mockData = MOCK.map(mockItem => mockItem)
  const theme = useTheme()

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
        color: theme.palette.secondary.main,
        background: theme.palette.primary.main,
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5">
          {t(TRANSLATION_KEYS.NAME)}
          {user.name}
        </Typography>
      </CardContent>
      <Divider orientation="horizontal" variant="fullWidth" flexItem />
      <CardMedia component="img" height="128" loading="lazy" />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {t(TRANSLATION_KEYS.DETAILS)}
          {user.age}
        </Typography>
      </CardContent>
      <Divider orientation="horizontal" variant="fullWidth" flexItem />
      <CardActions>
        <Button sx={{ color: theme.palette.success.main }} size="small" variant="text">
          {t(TRANSLATION_KEYS.BUYNOW)}
        </Button>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Button sx={{ color: theme.palette.info.main }} size="small" variant="text">
          {t(TRANSLATION_KEYS.DETAILS)}
        </Button>
      </CardActions>
    </Card>
  )

  const filteredData = usersList.filter((filteredUser: { name: string }) =>
    filteredUser.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <Grid container spacing={2}>
      {(filteredData.length > 0 ? filteredData : mockData).map((user: UserData) => (
        <Grid item xs={9 / 3} key={generateUniqueKey()}>
          {cardRender(user)}
        </Grid>
      ))}

      {isLoading && (
        <Typography sx={{ color: theme.palette.warning.main }}>
          {t(TRANSLATION_KEYS.LOADING)}
        </Typography>
      )}
    </Grid>
  )
}

export default Products
