import { configureStore, StateFromReducersMapObject } from '@reduxjs/toolkit'
import rootReducer from '../reducers/rootReducer'

const store = configureStore({
  reducer: rootReducer,
})

// Create AppDispatch type
export type AppDispatch = typeof store.dispatch
export type RootState = StateFromReducersMapObject<typeof rootReducer>
export default store
