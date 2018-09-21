import SinglePage from 'components/SinglePage'

const ReportPage = SinglePage.extend`
  grid-gap: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'header header'
    'info figure'
    'info comments';

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'figure'
      'info'
      'comments';
  }

  @media (max-width: 640px) {
    grid-gap: 16px;
  }

  @media print {
    grid-gap: 24px;
    grid-template-areas: 'header header' 'info figure';
  }
`

export default ReportPage
