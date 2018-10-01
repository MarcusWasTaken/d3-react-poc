import React from 'react'
import { connect } from 'react-redux'
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
import GraphClass from 'graph/Graph'
import { getData } from './app/selectors'
import validateData from 'utils/validateData'
import { getAxes } from './graph/selectors'

const graph = new GraphClass()

class Graph extends React.Component {
  constructor(props) {
    super(props)
    this.debouncedDraw = debounce(this.drawGraph, 0)
    this.state = {
      graphCreated: false
    }
  }

  componentDidMount() {
    this.debouncedDraw()
  }

  componentDidUpdate() {
    this.debouncedDraw()
  }

  render() {
    const { width, height, data } = this.props

    return (
      <svg width={width} height={height} ref={node => (this.rootNode = node)} />
    )
  }

  drawGraph = () => {
    const { graphCreated } = this.state
    const { data } = this.props

    if (!validateData(data)) return false

    if (graphCreated) {
      this.updateGraph()
    } else {
      this.createGraph()
      this.setState({
        graphCreated: true
      })
    }
  }

  createGraph = () => {
    const { data, width, height, axes } = this.props

    graph.create(this.rootNode, width, height, data, {
      xDimension: axes.x,
      yGapDimension: axes.gapY,
      yConceptDimension: axes.conceptY
    })
  }

  updateGraph = () => {
    const { data, axes } = this.props

    graph.update(data, {
      xDimension: axes.x,
      yGapDimension: axes.gapY,
      yConceptDimension: axes.conceptY
    })
  }
}

const mapStateToProps = state => ({
  data: getData(state),
  axes: getAxes(state)
})

export default connect(mapStateToProps)(Graph)
