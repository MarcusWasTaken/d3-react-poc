import styled from 'styled-components'

const SinglePage = styled.article`
  margin: 24px;
  padding: 32px;
  background: white;
  max-width: 1400px;

  @media screen {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2),
      0 3px 1px -2px rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    border-radius: 2px;
    overflow: hidden;
  }

  @media (max-width: 640px) {
    margin: 8px;
    padding: 16px;
  }

  @media print {
    margin: 0;
    padding: 24px;
  }
`

export default SinglePage
