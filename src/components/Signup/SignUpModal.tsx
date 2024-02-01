import { setEmail } from '../../redux/reducers/signUpReducers/emailSlice'
import { setPassword } from '../../redux/reducers/signUpReducers/passwordSlice'
import { selectEmail } from '../../redux/selectors/emailSelectors'
import { selectPassword } from '../../redux/selectors/passwordSelector'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

interface SignUpModalInterface {
  isOpen: boolean
  closeModal: () => void
}

const SignUpModal = ({ isOpen, closeModal }: SignUpModalInterface) => {
  const email = useSelector(selectEmail)
  const password = useSelector(selectPassword)
  const dispatch = useDispatch()

  return (
    <Dialog
      open={isOpen}
      sx={{
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
      }}
      maxWidth={'sm'}
    >
      <DialogTitle>SignUp</DialogTitle>
      <DialogContent>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          gap={2}
        >
          <TextField
            type="email"
            sx={{ borderRadius: '5px' }}
            label="E-mail..."
            variant="outlined"
            value={email}
            fullWidth
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(setEmail(event.target.value))
            }}
          />
          <TextField
            type="password"
            required
            sx={{ borderRadius: '5px' }}
            label="Password.."
            variant="outlined"
            value={password}
            fullWidth
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(setPassword(event.target.value))
            }}
          />
        </Box>
      </DialogContent>
      <DialogContent>
        <DialogContentText>Other options</DialogContentText>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          gap={2}
        >
          <Box>Insert Other options here like: Google, Facebook, etc</Box>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={() => closeModal()}>Close</Button>
        <Button onClick={() => closeModal()}>SignUp</Button>
      </DialogActions>
    </Dialog>
  )
}

export default SignUpModal
