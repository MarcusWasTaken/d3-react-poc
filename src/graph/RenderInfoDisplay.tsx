import * as React from 'react'
import * as ReactDOM from 'react-dom'
import InfoDisplay from '../components/InfoDisplay'

export function RenderInfoDisplay(
  chosenGaps,
  chosenConcepts,
  gapRelations,
  gapConceptRelations
) {
  ReactDOM.render(
    <InfoDisplay
      gaps={chosenGaps}
      concepts={chosenConcepts}
      gapRelations={gapRelations}
      gapConceptRelations={gapConceptRelations}
    />,
    document.getElementById('info_display_container')
  )
}
