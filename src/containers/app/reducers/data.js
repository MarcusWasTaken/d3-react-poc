import { combineReducers } from 'redux'
import { SET_DATA } from 'containers/app/constants'

const createSubsetReducer = dataKey => (state = [], action) => {
  if (action.type === SET_DATA) {
    return action.data[dataKey]
  }

  return state
}

export default combineReducers({
  gaps: createSubsetReducer('gaps'),
  concepts: createSubsetReducer('concepts'),
  gapRelations: createSubsetReducer('gapRelations'),
  gapConceptRelations: createSubsetReducer('gapConceptRelations')
})
