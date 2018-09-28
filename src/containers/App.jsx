import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import Routes from 'containers/app/Routes'
import Header from 'components/Header'
import HeaderBranding from 'components/HeaderBranding'
import { GraphDataStore } from 'models/GraphDataStore'
import { setData } from 'containers/app/actions'
import validateData from 'utils/validateData'

class App extends React.Component {
  componentDidMount() {
    this.getData()
  }

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

  getData = async () => {
    const dateRange = GraphDataStore.getDateRange()
    const data = GraphDataStore.getData(dateRange[dateRange.length - 1])
    const validData = validateData(data)
    if (!validData) {
      await GraphDataStore.loadData()
    }
    this.setData()
  }

  setData = () => {
    const { setData } = this.props
    const dateRange = GraphDataStore.getDateRange()
    const data = GraphDataStore.getData(dateRange[dateRange.length - 1])
    setData(data)
  }
}

const withConnect = connect(
  null,
  { setData }
)

export default compose(
  withRouter,
  withConnect
)(App)
