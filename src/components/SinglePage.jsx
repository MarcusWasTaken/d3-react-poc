import styled from 'styled-components'

const SinglePage = styled.article`
  margin: 24px;
  padding: 32px;
  grid-gap: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'header header'
    'info figure'
    'info comments';
  background: white;
  max-width: 1400px;

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'figure'
      'info'
      'comments';
  }

  @media (max-width: 640px) {
    margin: 8px;
    padding: 16px;
    grid-gap: 16px;
  }

  @media print {
    margin: 0;
    padding: 24px;
    grid-gap: 24px;
    grid-template-areas: 'header header' 'info figure';
  }
`

export default SinglePage
