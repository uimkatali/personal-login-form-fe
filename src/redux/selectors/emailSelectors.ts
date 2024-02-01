import { RootState } from '../reducers/rootReducer'

export const selectEmail = (state: RootState) => state.email.email
