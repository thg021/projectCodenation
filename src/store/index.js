import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

import promise from 'redux-promise'
import thunk from 'redux-thunk'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk, promise)(createStore)(reducers, devTools)

export default store