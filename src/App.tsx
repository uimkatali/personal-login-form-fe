import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { Box } from '@mui/material'
import Products from './components/About/Products'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Profile/Login'

const App = () => {
  return (
    <Router>
      <Box>
        <Box>
          <Navbar />
        </Box>
        <Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Products filter={''} />} /> //TODO-Add slice for this
            filter
            <Route path="/login" element={<Login />} />
            <Route path="/logout" />
          </Routes>
        </Box>
      </Box>
    </Router>
  )
}

export default App
