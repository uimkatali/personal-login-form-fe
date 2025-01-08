import { RootState } from '../reducers/rootReducer'

export const selectProjectId = (state: RootState) => state.project.id
