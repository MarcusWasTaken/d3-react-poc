import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  height: 72px;
  margin-right: auto;
  padding-left: 56px;
  align-items: center;
  background: #0086bf;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.14),
    0 2px 4px -1px rgba(0, 0, 0, 0.12);

  @media print {
    display: none;
  }

  @media (max-width: 640px) {
    padding-left: 24px;
  }
`

export default Header
