import React from 'react'
import Routes from 'containers/app/Routes'

class App extends React.Component {
  render() {
    console.log('envs: ', process.env)
    return <Routes />
  }
}

export default App
