import { UIModeProviderProps } from '@/types/context'
import { UIModeContext } from '../../utils/uiModeContext/uiModeContext'
import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import lightTheme from '../../utils/uiModeContext/lightTheme'
import darkTheme from '../../utils/uiModeContext/darkTheme'

const UIModeProvider = ({ children }: UIModeProviderProps) => {
  const [uiMode, setUIMode] = useState('light')
  const toggleUIMode = () => {
    setUIMode(prevState => (prevState === 'light' ? 'dark' : 'light'))
  }

  return (
    <UIModeContext.Provider value={{ uiMode, toggleUIMode }}>
      <ThemeProvider theme={uiMode === 'light' ? lightTheme : darkTheme}> {children}</ThemeProvider>
    </UIModeContext.Provider>
  )
}

export default UIModeProvider
