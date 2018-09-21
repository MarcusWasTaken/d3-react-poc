import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { format } from 'date-fns'

const StyledDateTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  margin-top: 16px;

  @media (max-width: 640px) {
    font-size: 20px;
    margin-top: 8px;
  }
`

const HideInPrintSpan = styled.span`
  @media print {
    display: none;
  }
`

class PageDateTitle extends React.PureComponent {
  static propTypes = {
    creationDate: PropTypes.string.isRequired
  }

  render() {
    const { creationDate, changedDate } = this.props

    const formattedCreationDate = format(new Date(creationDate), 'D MMM YYYY')
    const formattedChangedDate = format(new Date(changedDate), 'D MMM YYYY')
    const showChangedDate =
      changedDate && formattedCreationDate !== formattedChangedDate

    return (
      <StyledDateTitle>
        {`Created ${formattedCreationDate}`}
        {showChangedDate && (
          <HideInPrintSpan>
            {`, changed ${formattedChangedDate}`}
          </HideInPrintSpan>
        )}
      </StyledDateTitle>
    )
  }
}

export default PageDateTitle
