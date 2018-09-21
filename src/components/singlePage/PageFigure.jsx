import styled from 'styled-components'

const PageFigure = styled.figure`
  border: 2px solid #0086bf;
  padding: 16px;
  margin: 0;
  grid-area: figure;

  img {
    display: block;
    width: 100%;
    height: auto;

    @media print {
      width: 40vw;
    }
  }

  figcaption {
    margin-top: 16px;
    font-size: 20px;
    letter-spacing: 0.15px;
    text-align: center;
    font-style: italic;
  }
`

export default PageFigure
