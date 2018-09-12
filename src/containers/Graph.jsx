import React from 'react'
import {
  selectCircles,
  updateCircles,
  removeCircles,
  createCircles
} from 'containers/graph/circles'
import { createLinearScale, updateScale } from 'containers/graph/scales'
import { createDiagram } from 'containers/graph/svg'
import {
  createXAxis,
  createYAxis,
  updateXAxis,
  updateYAxis
} from 'containers/graph/axis'

class Graph extends React.Component {
  componentDidMount() {
    this.createGraph()
  }

  componentDidUpdate() {
    this.updateGraph()
  }

  render() {
    const { width, height } = this.props

    return (
      <svg width={width} height={height} ref={node => (this.rootNode = node)} />
    )
  }

  createGraph = () => {
    const { data, width, height, margin } = this.props

    const modifiedWidth = width - margin.left - margin.right
    const modifiedHeight = height - margin.top - margin.bottom

    this.diagram = createDiagram(this.rootNode, margin)
    this.xScale = createLinearScale(data, 'gpa', [0, modifiedWidth])
    this.yScale = createLinearScale(data, 'height', [modifiedHeight, 0])
    this.xAxis = createXAxis(this.diagram, modifiedHeight, this.xScale)
    this.yAxis = createYAxis(this.diagram, modifiedWidth, this.yScale)

    const circles = selectCircles(this.diagram, data)
    createCircles(circles, this.xScale, this.yScale)
  }

  updateGraph = () => {
    const { data } = this.props

    updateScale(this.xScale, data, 'gpa')
    updateScale(this.yScale, data, 'height')

    updateXAxis(this.xAxis, this.xScale)
    updateYAxis(this.yAxis, this.yScale)

    const circles = selectCircles(this.diagram, data)
    removeCircles(circles, this.yScale)
    updateCircles(circles, this.xScale, this.yScale)
    createCircles(circles, this.xScale, this.yScale)
  }
}

export default Graph
