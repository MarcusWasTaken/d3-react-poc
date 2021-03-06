import { combineReducers } from 'redux'
import {
  SET_X_AXIS,
  SET_GAP_Y_AXIS,
  SET_CONCEPT_Y_AXIS
} from 'containers/graph/constants'

const x = (state = 'dueDate', action) => {
  if (action.type === SET_X_AXIS) {
    return action.value
  }
  return state
}

const gapY = (state = 'owner', action) => {
  if (action.type === SET_GAP_Y_AXIS) {
    return action.value
  }
  return state
}

const conceptY = (state = 'viewpoint', action) => {
  if (action.type === SET_CONCEPT_Y_AXIS) {
    return action.value
  }
  return state
}

export default combineReducers({
  x,
  gapY,
  conceptY
})
