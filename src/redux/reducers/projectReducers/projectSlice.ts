import { ProjectsData } from '@/types/projects'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface projectState {
  loading: boolean
  error: string | null
}

const initialState: projectState = {
  loading: false,
  error: null,
}
export const postProject = createAsyncThunk(
  'projects/postProject',
  async (projectData: ProjectsData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3001/projects/create', projectData)
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || 'An error occurred.')
      } else {
        return rejectWithValue('An unexpected error occurred')
      }
    }
  }
)

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(postProject.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(postProject.fulfilled, state => {
        state.loading = false
      })
      .addCase(postProject.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string | null
      })
  },
})

export default projectSlice.reducer
