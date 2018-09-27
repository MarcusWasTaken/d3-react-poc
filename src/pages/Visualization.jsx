import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Graph from 'containers/Graph'
import AxisSelect from 'containers/graph/AxisSelect'
import { getGaps, getConcepts } from 'containers/app/selectors'
import SinglePage from 'components/SinglePage'
import PageHeader from 'components/singlePage/PageHeader'
import PageTitle from 'components/singlePage/PageTitle'
import NodeSelect from './visualization/NodeSelect'
import SelectedNodes from './visualization/SelectedNodes'

const datasets = [
  [
    { gpa: 3.42, height: 138 },
    { gpa: 3.54, height: 153 },
    { gpa: 3.14, height: 148 },
    { gpa: 2.76, height: 164 },
    { gpa: 2.95, height: 162 },
    { gpa: 3.36, height: 143 }
  ],
  [
    { gpa: 3.15, height: 157 },
    { gpa: 3.12, height: 175 },
    { gpa: 3.67, height: 167 },
    { gpa: 3.85, height: 149 },
    { gpa: 2.32, height: 165 },
    { gpa: 3.01, height: 171 },
    { gpa: 3.54, height: 168 },
    { gpa: 2.89, height: 180 },
    { gpa: 3.75, height: 153 }
  ]
]

const margin = { top: 10, right: 10, bottom: 50, left: 50 }

class Visualization extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: datasets[0], dataset: 0, width: 800, height: 500 }
  }

  render() {
    const { data, width, height } = this.state
    const { gaps, concepts } = this.props

    return (
      <SinglePage>
        <PageHeader>
          <PageTitle>GapMap</PageTitle>
        </PageHeader>

        <AxisSelect />
        <Graph width={width} height={height} data={data} margin={margin} />
        <button onClick={this.handleClick}>Switch dataset</button>
        <button onClick={this.handleSizeChange}>Change size</button>
        <h4>Links to gaps:</h4>
        {gaps.length > 0 && (
          <ul>
            {gaps.map(gap => (
              <li key={gap.id}>
                <Link to={`/gap/${gap.id}`}>{gap.title}</Link>
              </li>
            ))}
          </ul>
        )}
        <h4>Links to concepts:</h4>
        {concepts.length > 0 && (
          <ul>
            {concepts.map(concept => (
              <li key={concept.id}>
                <Link to={`/concept/${concept.id}`}>{concept.title}</Link>
              </li>
            ))}
          </ul>
        )}
        <NodeSelect />
        <SelectedNodes />
      </SinglePage>
    )
  }

  handleClick = () => {
    let { dataset } = this.state
    dataset = ++dataset % datasets.length
    this.setState({
      data: datasets[dataset],
      dataset
    })
  }

  handleSizeChange = () => {
    const { width, height } = this.state

    this.setState({
      width: width + 50,
      height: height + 50
    })
  }
}

const mapStateToProps = state => ({
  gaps: getGaps(state),
  concepts: getConcepts(state)
})

export default connect(mapStateToProps)(Visualization)
