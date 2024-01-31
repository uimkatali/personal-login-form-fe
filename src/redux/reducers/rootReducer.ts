import { combineReducers } from '@reduxjs/toolkit'
import emailReducer from './signUpReducers/emailSlice'
import passwordReducer from './signUpReducers/passwordSlice'

const rootReducer = combineReducers({
  email: emailReducer,
  password: passwordReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
