import { combineReducers } from '@reduxjs/toolkit'
import emailReducer from './signUpReducers/emailSlice'
import passwordReducer from './signUpReducers/passwordSlice'
import projectReducer from '../reducers/projectReducers/projectSlice'

const rootReducer = combineReducers({
  email: emailReducer,
  password: passwordReducer,
  projects: projectReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
