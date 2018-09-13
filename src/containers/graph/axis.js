import { axisBottom, axisLeft } from 'd3'
import t from './transition'

export function createXAxis(node, height, x) {
  return node
    .append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(axisBottom(x))
}

export function createYAxis(node, width, y) {
  return node.append('g').call(axisLeft(y))
}

export function updateXAxis(axis, x) {
  return axis.transition(t).call(axisBottom(x))
}

export function updateYAxis(axis, y) {
  return axis.transition(t).call(axisLeft(y))
}
