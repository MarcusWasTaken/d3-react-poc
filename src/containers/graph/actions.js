import {
  SET_X_AXIS,
  SET_GAP_Y_AXIS,
  SET_CONCEPT_Y_AXIS
} from 'containers/graph/constants'

export const setXAxis = value => ({
  type: SET_X_AXIS,
  value
})

export const setGapYAxis = value => ({
  type: SET_GAP_Y_AXIS,
  value
})

export const setConceptYAxis = value => ({
  type: SET_CONCEPT_Y_AXIS,
  value
})
