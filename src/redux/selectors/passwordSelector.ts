import { RootState } from '../reducers/rootReducer'

export const selectPassword = (state: RootState) => state.password.password
