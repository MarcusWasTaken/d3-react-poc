import React from 'react'
import { Link } from 'react-router-dom'
import Routes from 'containers/app/Routes'
import Header from 'components/Header'
import HeaderBranding from 'components/HeaderBranding'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header>
          <HeaderBranding>
            <Link to="/">Gapmap</Link>
          </HeaderBranding>
        </Header>
        <Routes />
      </React.Fragment>
    )
  }
}

export default App
