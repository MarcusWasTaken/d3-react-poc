import t from './transition'

export function selectCircles(node, data) {
  return node.selectAll('circle').data(data)
}

export function createCircles(circles, x, y) {
  return circles
    .enter()
    .append('circle')
    .attr('cx', d => x(d.gpa))
    .attr('cy', y(0))
    .attr('r', 5)
    .attr('fill', 'grey')
    .attr('fill-opacity', 0.1)
    .transition(t)
    .attr('fill-opacity', 1)
    .attr('cy', d => y(d.height))
}

export function updateCircles(circles, x, y) {
  return circles
    .transition(t)
    .attr('cx', d => x(d.gpa))
    .attr('cy', d => y(d.height))
}

export function removeCircles(circles, y) {
  return circles
    .exit()
    .transition(t)
    .attr('fill-opacity', 0.1)
    .attr('cy', y(0))
    .remove()
}
