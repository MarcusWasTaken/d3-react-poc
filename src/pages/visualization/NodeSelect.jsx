import React from 'react'
import { connect } from 'react-redux'
import { getGaps, getConcepts } from 'containers/app/selectors'
import { selectNodes } from 'containers/app/actions'

class NodeSelect extends React.Component {
  // componentWillUnmount() {
  //   this.handleClear()
  // }

  render() {
    const { gaps, concepts } = this.props

    return (
      <div>
        <h4>Select nodes:</h4>
        <select
          multiple
          onChange={this.handleChange}
          size={gaps.length + concepts.length + 2}
          ref={node => (this.select = node)}
        >
          <optgroup label="Gaps">
            {gaps.map(gap => (
              <option key={gap.id} className="gap" value={gap.id}>
                {gap.title}
              </option>
            ))}
          </optgroup>
          <optgroup label="Concepts">
            {concepts.map(concept => (
              <option key={concept.id} className="concept" value={concept.id}>
                {concept.title}
              </option>
            ))}
          </optgroup>
        </select>
        <button onClick={this.handleClear}>Clear selection</button>
      </div>
    )
  }

  handleClear = () => {
    const { selectNodes } = this.props
    selectNodes([], [])
    this.select.value = ''
  }

  handleChange = () => {
    const { selectNodes } = this.props
    const selectedGaps = Array.from(
      this.select.querySelectorAll('option.gap:checked'),
      e => e.value
    )
    const selectedConcepts = Array.from(
      this.select.querySelectorAll('option.concept:checked'),
      e => e.value
    )
    selectNodes(selectedGaps, selectedConcepts)
  }
}

const mapStateToProps = state => ({
  gaps: getGaps(state),
  concepts: getConcepts(state)
})

export default connect(
  mapStateToProps,
  { selectNodes }
)(NodeSelect)
