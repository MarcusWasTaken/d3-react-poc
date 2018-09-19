import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <React.Fragment>
    <h1>404: Page not found</h1>
    <div>
      <p>Oops! The page you are looking for seems to be unavailable.</p>
      <p>
        <Link to="/">Click here to go home</Link>.
      </p>
    </div>
  </React.Fragment>
)

export default NotFound
