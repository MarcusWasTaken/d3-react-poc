import React from 'react'
import QRCode from 'qrcode'
import Graph from 'containers/Graph'
import AxisSelect from 'containers/graph/AxisSelect'

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

    return (
      <React.Fragment>
        <AxisSelect />
        <Graph width={800} height={500} data={data} margin={margin} />
        <button onClick={this.handleClick}>Switch dataset</button>
        <canvas ref={node => (this.canvas = node)} />
      </React.Fragment>
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
    QRCode.toCanvas(this.canvas, 'http://10.10.2.83:3020/')
  }
}

export default Visualization
