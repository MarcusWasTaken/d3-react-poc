import React from 'react'

class Navigation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h4>Links to gaps:</h4>
        {gaps.length > 0 && (
          <ul>
            {gaps.map(gap => (
              <li key={gap.id}>
                <Link to={`/gap/${gap.id}`}>{gap.title}</Link>
              </li>
            ))}
          </ul>
        )}
        <h4>Links to concepts:</h4>
        {concepts.length > 0 && (
          <ul>
            {concepts.map(concept => (
              <li key={concept.id}>
                <Link to={`/concept/${concept.id}`}>{concept.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </React.Fragment>
    )
  }
}

export default Navigation
