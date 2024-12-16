import { createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#003da5',
    },
    secondary: {
      main: '#ffffff',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    success: {
      main: '#4caf50',
    },
  },
})

export default darkTheme
