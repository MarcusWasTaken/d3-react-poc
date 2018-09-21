import styled from 'styled-components'

const PageComments = styled.section`
  border: 2px solid #0086bf;
  padding: 16px;
  grid-area: comments;

  @media print {
    display: none;
  }
`

export default PageComments
