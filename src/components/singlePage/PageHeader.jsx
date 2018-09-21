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
    id: PropTypes.string.isRequired,
    children: PropTypes.node
  }

  componentDidMount() {
    this.createQRCode()
  }

  render() {
    const { children } = this.props

    return (
      <StyledHeader>
        <StyledContainer>{children}</StyledContainer>
        <StyledCanvas innerRef={node => (this.canvas = node)} />
      </StyledHeader>
    )
  }

  createQRCode = () => {
    const { id } = this.props
    QRCode.toCanvas(this.canvas, `${localIP}/gap/${id}`, {
      errorCorrectionLevel: 'Q'
    })
  }
}

export default PageHeader
