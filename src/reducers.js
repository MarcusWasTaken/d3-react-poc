import { combineReducers } from 'redux'
import data from 'containers/app/reducers'
import graph from 'containers/graph/reducers'

export default combineReducers({
  data,
  graph
})
