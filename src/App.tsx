import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { Box } from '@mui/material'
import About from './components/About/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

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
            <Route path="/about" element={<About />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  )
}

export default App
