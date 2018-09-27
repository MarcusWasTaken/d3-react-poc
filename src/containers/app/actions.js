import { SELECT_NODES, SET_DATA } from 'containers/app/constants'

export const selectNodes = (gaps, concepts) => ({
  type: SELECT_NODES,
  gaps,
  concepts
})

export const setData = data => ({
  type: SET_DATA,
  data
})
