import React from 'react'
import { connect } from 'react-redux'
import { getGapRelations } from 'containers/app/selectors'
import Fieldset from 'components/Fieldset'
import Legend from 'components/Legend'

class GapRelations extends React.Component {
  render() {
    return (
      <Fieldset>
        <Legend>Information</Legend>
        'GapRelations.jsx'
      </Fieldset>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { id } = props
  const filteredGapRelations = getGapRelations(state).filter(
    relation => relation.fromId === id || relation.toId === id
  )
  const gapRelations = filteredGapRelations.map(relation => ({
    ...relation,
    relationType: relation.fromId === id ? 'from' : 'to'
  }))

  return {
    gapRelations
  }
}

export default connect(mapStateToProps)(GapRelations)
