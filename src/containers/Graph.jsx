import React from 'react'
import debounce from 'lodash/debounce'
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
  constructor(props) {
    super(props)
    this.debouncedUpdate = debounce(this.updateGraph, 750)
  }

  componentDidMount() {
    this.createGraph()
  }

  componentDidUpdate() {
    this.debouncedUpdate()
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
    const { data, width, margin, height } = this.props

    const modifiedWidth = width - margin.left - margin.right
    const modifiedHeight = height - margin.top - margin.bottom

    updateScale(this.xScale, data, 'gpa', [0, modifiedWidth])
    updateScale(this.yScale, data, 'height', [modifiedHeight, 0])

    updateXAxis(this.xAxis, modifiedHeight, this.xScale)
    updateYAxis(this.yAxis, modifiedWidth, this.yScale)

    const circles = selectCircles(this.diagram, data)
    removeCircles(circles, this.yScale)
    updateCircles(circles, this.xScale, this.yScale)
    createCircles(circles, this.xScale, this.yScale)
  }
}

export default Graph
