import { UIModeProviderProps } from '@/types/context'
import { UIModeContext } from '../../utils/uiModeContext/uiModeContext'
import { useState } from 'react'

const UIModeProvider = ({ children }: UIModeProviderProps) => {
  const [uiMode, setUIMode] = useState('light')
  const toggleUIMode = () => {
    setUIMode(prevState => (prevState === 'light' ? 'dark' : 'light'))
  }

  return (
    <UIModeContext.Provider value={{ uiMode, toggleUIMode }}>{children}</UIModeContext.Provider>
  )
}

export default UIModeProvider
