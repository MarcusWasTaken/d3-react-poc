import { makeSelector } from 'utils/selectors'

const axes = state => state.graph.axes
const xAxis = state => state.graph.axes.x
const gapYAxis = state => state.graph.axes.gapY
const conceptYAxis = state => state.graph.axes.conceptY

export const getAxes = makeSelector(axes)
export const getXAxis = makeSelector(xAxis)
export const getGapYAxis = makeSelector(gapYAxis)
export const getConceptYAxis = makeSelector(conceptYAxis)
