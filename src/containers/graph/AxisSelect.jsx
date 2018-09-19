import React from 'react'
import { connect } from 'react-redux'
import Select from 'components/Select'
import {
  setXAxis,
  setGapYAxis,
  setConceptYAxis
} from 'containers/graph/actions'
import { getXAxis, getGapYAxis, getConceptYAxis } from './selectors'

const axisOptions = [
  { value: 'value', text: 'Value' },
  { value: 'created', text: 'Created' },
  { value: 'owner', text: 'Owner' }
]

class AxisSelect extends React.Component {
  render() {
    const { xAxis, gapYAxis, conceptYAxis } = this.props

    return (
      <div>
        <span>
          <strong>X Axis: </strong>
          <Select
            value={xAxis || ''}
            options={axisOptions}
            onChange={this.onXAxisChange}
          />
        </span>
        <span>
          <strong>Gap Y Axis: </strong>
          <Select
            value={gapYAxis || ''}
            options={axisOptions}
            onChange={this.onGapYAxisChange}
          />
        </span>
        <span>
          <strong>Concept Y Axis: </strong>
          <Select
            value={conceptYAxis || ''}
            options={axisOptions}
            onChange={this.onConceptYAxisChange}
          />
        </span>
      </div>
    )
  }

  onXAxisChange = e => {
    const { setXAxis } = this.props
    setXAxis(e.target.value)
  }

  onGapYAxisChange = e => {
    const { setGapYAxis } = this.props
    setGapYAxis(e.target.value)
  }

  onConceptYAxisChange = e => {
    const { setConceptYAxis } = this.props
    setConceptYAxis(e.target.value)
  }
}

const mapStateToProps = state => ({
  xAxis: getXAxis(state),
  gapYAxis: getGapYAxis(state),
  conceptYAxis: getConceptYAxis(state)
})

export default connect(
  mapStateToProps,
  { setXAxis, setGapYAxis, setConceptYAxis }
)(AxisSelect)
