import { UIModeContextType } from '@/types/context'
import { createContext, useContext } from 'react'

export const UIModeContext = createContext<UIModeContextType>({
  uiMode: 'light',
  toggleUIMode: () => {},
})

export const useUIModeContext = () => {
  const context = useContext(UIModeContext)
  if (!context) {
    throw Error('The UIMode should be used with a provider')
  }
  return context
}
