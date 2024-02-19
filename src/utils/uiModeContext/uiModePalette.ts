import { Theme, createTheme } from '@mui/material/styles'
import { createContext } from 'react'

export const ThemeContext = createTheme({
  palette: {
    mode: 'light',
  },
})
