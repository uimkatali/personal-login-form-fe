import { UIModeProviderProps } from '@/types/context'
import { UIModeContext } from '../../utils/uiModeContext/uiModeContext'
import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { ThemeContext } from '../../utils/uiModeContext/uiModePalette'

const UIModeProvider = ({ children }: UIModeProviderProps) => {
  const [uiMode, setUIMode] = useState('light')
  const toggleUIMode = () => {
    setUIMode(prevState => (prevState === 'light' ? 'dark' : 'light'))
  }

  return (
    <UIModeContext.Provider value={{ uiMode, toggleUIMode }}>
      <ThemeProvider theme={ThemeContext}> {children}</ThemeProvider>
    </UIModeContext.Provider>
  )
}

export default UIModeProvider
