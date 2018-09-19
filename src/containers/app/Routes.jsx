import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Visualization from 'pages/Visualization'
import NotFound from 'pages/NotFound'
import GapPage from 'pages/GapPage'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Visualization} />
        <Route path="/gap/:id" component={GapPage} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default Routes
