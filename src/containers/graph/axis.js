import { axisBottom, axisLeft } from 'd3'
import t from './transition'

export const createXAxis = (node, height, x) =>
  node
    .append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(axisBottom(x))

export const createYAxis = (node, width, y) =>
  node.append('g').call(axisLeft(y))

export const updateXAxis = (axis, x) => axis.transition(t).call(axisBottom(x))
export const updateYAxis = (axis, y) => axis.transition(t).call(axisLeft(y))
