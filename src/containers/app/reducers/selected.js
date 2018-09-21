import { combineReducers } from 'redux'
import { SELECT_NODES } from 'containers/app/constants'

const gaps = (state = [], action) => {
  if (action.type === SELECT_NODES) {
    return action.gaps
  }

  return state
}

const concepts = (state = [], action) => {
  if (action.type === SELECT_NODES) {
    return action.concepts
  }

  return state
}

export default combineReducers({
  gaps,
  concepts
})
