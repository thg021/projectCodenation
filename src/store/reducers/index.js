import { combineReducers } from 'redux'
import getUserReducer from './getUserReducer'
import getRepositoryReducer from './getRepositoryReducer'

const rootReducer = combineReducers({
    user: getUserReducer,
    repository: getRepositoryReducer
})

export default rootReducer

