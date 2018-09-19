import { injectGlobal } from 'styled-components'

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  html {
    font-size: 10px;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
    /* font-family: Arial,sans-serif; */
    /* font-family: 'Roboto', sans-serif;
    font-weight: 400; */
    background-color: #fafafa;
    color: rgba(0,0,0,.87);
    overflow: hidden;
  }
  #root {
    min-height: 100%;
    min-width: 100%;
    /* display: flex; */
  }
`
