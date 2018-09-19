import { makeSelector } from 'utils/selectors'

const xAxis = state => state.graph.axis.x
const gapYAxis = state => state.graph.axis.gapY
const conceptYAxis = state => state.graph.axis.conceptY

export const getXAxis = makeSelector(xAxis)
export const getGapYAxis = makeSelector(gapYAxis)
export const getConceptYAxis = makeSelector(conceptYAxis)
