import styled from 'styled-components'

const PageInfo = styled.section`
  border: 2px solid #0086bf;
  padding: 16px;
  grid-area: info;

  dl {
    margin: 0;
    margin-bottom: 8px;
  }

  dt {
    font-size: 24px;
    margin-bottom: 4px;

    @media screen {
      color: #0086bf;
    }
  }

  dd {
    position: relative;
    padding-left: 16px;
    font-size: 18px;
    margin-left: 24px;
    margin-bottom: 4px;

    &:before {
      content: '';
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #0086bf;
      left: 0;
      top: 7.5px;
    }
  }

  @media (max-width: 640px) {
    dt {
      font-size: 20px;
      letter-spacing: 0.15px;
    }

    dd {
      font-size: 14px;
    }
  }

  @media print {
    dt {
      font-size: 20px;
      letter-spacing: 0.15px;
    }

    dd {
      font-size: 14px;
    }

    .hideInPrint {
      display: none;
    }
  }
`

export default PageInfo
