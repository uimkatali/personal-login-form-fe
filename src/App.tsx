import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { Box, Container, GlobalStyles, useTheme } from '@mui/material'
import Products from './components/Products/Products'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Profile/Login'
import { Logout } from './components/Profile/Logout'
import { Details } from './Details/Details'
import { makeStyles } from '@mui/styles'
import ProfileContent from './components/Profile/ProfileContent'

const useStyle = makeStyles(() => ({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    felxDirection: 'column',
  },
}))

const App = () => {
  const classes = useStyle()
  const theme = useTheme()

  return (
    <Router>
      <GlobalStyles
        styles={{
          body: { height: '100%', backgroundColor: theme.palette.secondary.main },
        }}
      />
      <Box>
        <Container className={classes.container} maxWidth={'xl'}>
          <Box>
            <Navbar />
          </Box>
          <Box>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Products filter={''} />} /> //TODO-Add slice for this
              filter
              <Route path="/details" element={<Details />} />
              <Route path="/profile" element={<ProfileContent />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </Box>
        </Container>
      </Box>
    </Router>
  )
}

export default App
