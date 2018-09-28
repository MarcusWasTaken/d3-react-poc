import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  getSelectedGaps,
  getSelectedConcepts,
  getGaps,
  getConcepts
} from 'containers/app/selectors'
import Fieldset from 'components/Fieldset'
import Legend from 'components/Legend'

const NodeItem = styled.p`
  margin: 16px;
`

class SelectedNodes extends React.Component {
  render() {
    const { gaps, concepts, selectedGaps, selectedConcepts } = this.props

    const mappedGaps = selectedGaps
      .map(id => gaps.find(gap => gap.id == id))
      .filter(o => !!o)
    const mappedConcepts = selectedConcepts
      .map(id => concepts.find(concept => concept.id == id))
      .filter(o => !!o)

    return (
      <React.Fragment>
        {mappedGaps.length > 0 && (
          <Fieldset>
            <Legend>Selected gaps</Legend>
            {mappedGaps.map(gap => (
              <NodeItem key={gap.id}>
                <Link to={`/gap/${gap.id}`}>{gap.title}</Link>
              </NodeItem>
            ))}
          </Fieldset>
        )}
        {mappedConcepts.length > 0 && (
          <Fieldset>
            <Legend>Selected concepts</Legend>
            {mappedConcepts.map(concept => (
              <NodeItem key={concept.id}>
                <Link to={`/concept/${concept.id}`}>{concept.title}</Link>
              </NodeItem>
            ))}
          </Fieldset>
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  gaps: getGaps(state),
  concepts: getConcepts(state),
  selectedGaps: getSelectedGaps(state),
  selectedConcepts: getSelectedConcepts(state)
})

export default connect(mapStateToProps)(SelectedNodes)
