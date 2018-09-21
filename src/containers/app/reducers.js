import { combineReducers } from 'redux'
import data from 'containers/app/reducers/data'
import selected from 'containers/app/reducers/selected'

export default combineReducers({
  data,
  selected
})
