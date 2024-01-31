import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface EmailState {
  email: string
}

const initialState: EmailState = {
  email: '',
}

const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
  },
})

export const { setEmail } = emailSlice.actions

export default emailSlice.reducer
