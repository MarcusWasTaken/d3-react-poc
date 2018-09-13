import { select } from 'd3'

export function createDiagram(node, { left, top }) {
  return select(node)
    .append('g')
    .attr('transform', `translate(${left}, ${top})`)
}
