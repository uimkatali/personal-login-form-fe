import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface PasswordState {
  password: string
}

const initialState: PasswordState = {
  password: '',
}

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
  },
})

export const { setPassword } = passwordSlice.actions

export default passwordSlice.reducer
