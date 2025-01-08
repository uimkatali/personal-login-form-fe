import { combineReducers } from '@reduxjs/toolkit'
import emailReducer from './signUpReducers/emailSlice'
import passwordReducer from './signUpReducers/passwordSlice'
import projectReducer from './projectsReducers/projectSlice'

const rootReducer = combineReducers({
  email: emailReducer,
  password: passwordReducer,
  project: projectReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
