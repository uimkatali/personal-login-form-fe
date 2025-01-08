import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ProjectState {
  id: string
}

const initialState: ProjectState = {
  id: '',
}

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjectId: (state, action: PayloadAction<string>) => {
      state.id = action.payload
    },
  },
})

export const { setProjectId } = projectSlice.actions

export default projectSlice.reducer
