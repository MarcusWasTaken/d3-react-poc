import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Select from 'components/Select'
import {
  setXAxis,
  setGapYAxis,
  setConceptYAxis
} from 'containers/graph/actions'
import {
  getXAxis,
  getGapYAxis,
  getConceptYAxis
} from 'containers/graph/selectors'
import Fieldset from 'components/Fieldset'
import Legend from 'components/Legend'

const axisOptions = [
  { value: 'dueDate', text: 'Due date' },
  { value: 'owner', text: 'Owner' },
  { value: 'viewpoint', text: 'Viewpoint' },
  { value: 'value', text: 'Value' }
]

const AxisGroup = styled.div`
  padding: 0 16px;
  margin: 16px 0;
`

const AxisTitle = styled.div`
  font-weight: 500;
`

class AxisSelect extends React.Component {
  render() {
    const { xAxis, gapYAxis, conceptYAxis } = this.props

    return (
      <Fieldset>
        <Legend>Axis selectors</Legend>
        <AxisGroup>
          <AxisTitle>Gap Y</AxisTitle>
          <Select
            value={gapYAxis || ''}
            options={axisOptions}
            onChange={this.onGapYAxisChange}
          />
        </AxisGroup>
        <AxisGroup>
          <AxisTitle>Concept Y</AxisTitle>
          <Select
            value={conceptYAxis || ''}
            options={axisOptions}
            onChange={this.onConceptYAxisChange}
          />
        </AxisGroup>
        <AxisGroup>
          <AxisTitle>Shared X</AxisTitle>
          <Select
            value={xAxis || ''}
            options={axisOptions}
            onChange={this.onXAxisChange}
          />
        </AxisGroup>
      </Fieldset>
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
