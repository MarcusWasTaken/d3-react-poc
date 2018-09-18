import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store'
import Root from './Root'

const store = configureStore()

ReactDOM.render(<Root store={store} />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./Root', () => {
    ReactDOM.render(<Root store={store} />, document.getElementById('root'))
  })
}
