import { ReactNode } from 'react'

export type UIModeContextType = {
  uiMode: string
  toggleUIMode: () => void
}

export type UIModeProviderProps = {
  children: ReactNode
}
