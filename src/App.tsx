import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { Box, GlobalStyles, useTheme } from '@mui/material'
import Products from './components/Products/Products'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Profile/Login'
import { Logout } from './components/Profile/Logout'
import { Details } from './Details/Details'
import ProfileContent from './components/Profile/ProfileContent'

const App = () => {
  const theme = useTheme()

  return (
    <Router>
      <GlobalStyles
        styles={{
          body: { height: '100%', width: '100%', backgroundColor: theme.palette.secondary.main },
        }}
      />
      <Navbar />
      <Box sx={{ marginTop: '96px' }}>
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
    </Router>
  )
}

export default App
