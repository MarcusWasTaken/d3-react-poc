import { SELECT_NODES } from 'containers/app/constants'

export const selectNodes = (gaps, concepts) => ({
  type: SELECT_NODES,
  gaps,
  concepts
})
