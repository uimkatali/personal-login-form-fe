import { IconButton } from '@mui/material'
import { useUIModeContext } from '../../utils/uiModeContext/uiModeContext'

const SwitchTheme = () => {
  const { uiMode, toggleUIMode } = useUIModeContext()

  return (
    <IconButton value={uiMode} onClick={toggleUIMode}>
      {uiMode}
    </IconButton>
  )
}

export default SwitchTheme
