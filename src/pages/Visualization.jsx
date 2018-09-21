import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import QRCode from 'qrcode'
import Graph from 'containers/Graph'
import AxisSelect from 'containers/graph/AxisSelect'
import { getGaps, getConcepts } from 'containers/app/selectors'
import { localIP } from 'config'
import SinglePage from 'components/SinglePage'
import PageHeader from 'components/singlePage/PageHeader'
import PageTitle from 'components/singlePage/PageTitle'

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
    this.state = { data: datasets[0], dataset: 0 }
  }

  componentDidMount() {
    this.generateQRCode()
  }

  render() {
    const { data } = this.state
    const { gaps } = this.props

    return (
      <SinglePage>
        <PageHeader>
          <PageTitle>GapMap</PageTitle>
        </PageHeader>

        <AxisSelect />
        <Graph width={800} height={500} data={data} margin={margin} />
        <button onClick={this.handleClick}>Switch dataset</button>
        <div>
          <canvas ref={node => (this.canvas = node)} />
        </div>
        <h4>Links to gaps:</h4>
        {gaps && (
          <ul>
            {Object.values(gaps).map(gap => (
              <li key={gap.id}>
                <Link to={`/gap/${gap.id}`}>{gap.title}</Link>
              </li>
            ))}
          </ul>
        )}
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

  generateQRCode = () => {
    QRCode.toCanvas(this.canvas, `${localIP}/`, { errorCorrectionLevel: 'Q' })
  }
}

const mapStateToProps = state => ({
  gaps: getGaps(state),
  concepts: getConcepts(state)
})

export default connect(mapStateToProps)(Visualization)
