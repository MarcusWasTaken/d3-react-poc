import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  getSelectedGaps,
  getSelectedConcepts,
  getGaps,
  getConcepts
} from 'containers/app/selectors'

class SelectedNodes extends React.Component {
  render() {
    const { gaps, concepts, selectedGaps, selectedConcepts } = this.props

    const mappedGaps = selectedGaps.map(id => gaps[id])
    const mappedConcepts = selectedConcepts.map(id => concepts[id])

    return (
      <React.Fragment>
        {mappedGaps.length > 0 && (
          <div>
            <h4>Selected gaps</h4>
            {mappedGaps.map(gap => (
              <p key={gap.id}>
                <Link to={`/gap/${gap.id}`}>{gap.title}</Link>
              </p>
            ))}
          </div>
        )}
        {mappedConcepts.length > 0 && (
          <div>
            <h4>Selected concepts</h4>
            {mappedConcepts.map(concept => (
              <p key={concept.id}>
                <Link to={`/concept/${concept.id}`}>{concept.title}</Link>
              </p>
            ))}
          </div>
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
