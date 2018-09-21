import { combineReducers } from 'redux'
import app from 'containers/app/reducers'
import graph from 'containers/graph/reducers'

export default combineReducers({
  app,
  graph
})
