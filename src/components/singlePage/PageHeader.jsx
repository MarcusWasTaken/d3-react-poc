import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import QRCode from 'qrcode'
import { localIP } from 'config'

const StyledHeader = styled.header`
  display: flex;
  grid-area: header;
`

const StyledContainer = styled.div`
  flex: 1 1 auto;
`

const StyledCanvas = styled.canvas`
  flex: 0 0 auto;

  @media screen {
    display: none;
  }
`

class PageHeader extends React.Component {
  static propTypes = {
    QRUrl: PropTypes.string,
    children: PropTypes.node
  }

  componentDidMount() {
    this.createQRCode()
  }

  render() {
    const { children, QRUrl } = this.props

    return (
      <StyledHeader>
        <StyledContainer>{children}</StyledContainer>
        {QRUrl && <StyledCanvas innerRef={node => (this.canvas = node)} />}
      </StyledHeader>
    )
  }

  createQRCode = () => {
    const { QRUrl } = this.props
    if (!QRUrl) return null
    QRCode.toCanvas(this.canvas, `${localIP}/${QRUrl}`, {
      errorCorrectionLevel: 'Q'
    })
  }
}

export default PageHeader
