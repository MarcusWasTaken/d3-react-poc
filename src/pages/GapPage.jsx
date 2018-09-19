import React from 'react'
import { Link } from 'react-router-dom'
import QRCode from 'qrcode'
import { connect } from 'react-redux'
import { getGaps } from 'containers/app/selectors'

class GapPage extends React.Component {
  componentDidMount() {
    this.createQRCode()
  }

  render() {
    const { gap } = this.props
    return (
      <div>
        <Link to="/">Home</Link>
        <h1>Gap</h1>
        <p>Id: {gap.id}</p>
        <p>Owner: {gap.owner}</p>
        <p>Title: {gap.title}</p>
        <canvas ref={node => (this.canvas = node)} />
      </div>
    )
  }

  createQRCode = () => {
    const { match } = this.props
    const id = match.params.id

    QRCode.toCanvas(this.canvas, `http://10.10.2.83:3020/gap/${id}`)
  }
}

const mapStateToProps = (state, props) => ({
  gap: getGaps(state)[props.match.params.id]
})

export default connect(mapStateToProps)(GapPage)
