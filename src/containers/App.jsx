import React from 'react'
import { Link } from 'react-router-dom'
import Routes from 'containers/app/Routes'
import Header from 'components/Header'
import HeaderBranding from 'components/HeaderBranding'
import { GraphDataStore } from 'models/GraphDataStore'

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
    await GraphDataStore.loadData()
    const dateRange = GraphDataStore.getDateRange()
    const data = GraphDataStore.getData(dateRange[dateRange.length - 1])
    console.log('dateRange: ', dateRange)
    console.log('data: ', data)
  }
}

export default App
