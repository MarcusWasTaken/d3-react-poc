import t from './transition'

export const selectCircles = (node, data) => node.selectAll('circle').data(data)

export const createCircles = (circles, x, y) =>
  circles
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

export const updateCircles = (circles, x, y) =>
  circles
    .transition(t)
    .attr('cx', d => x(d.gpa))
    .attr('cy', d => y(d.height))

export const removeCircles = (circles, y) =>
  circles
    .exit()
    .transition(t)
    .attr('fill-opacity', 0.1)
    .attr('cy', y(0))
    .remove()
