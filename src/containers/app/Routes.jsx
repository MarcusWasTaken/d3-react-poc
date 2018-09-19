import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Visualization from 'pages/Visualization'
import NotFound from 'pages/NotFound'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Visualization} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default Routes
