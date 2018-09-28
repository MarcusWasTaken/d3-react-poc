import React from 'react'
import Graph from 'containers/Graph'
import { getGaps, getConcepts } from 'containers/app/selectors'
import SinglePage from 'components/SinglePage'
import PageHeader from 'components/singlePage/PageHeader'
import PageTitle from 'components/singlePage/PageTitle'
import NodeSelect from 'pages/visualization/NodeSelect'
import SelectedNodes from 'pages/visualization/SelectedNodes'
import VisualizationWrapper from 'pages/visualization/VisualizationWrapper'
import GraphContainer from 'pages/visualization/GraphContainer'
import GraphAside from 'pages/visualization/GraphAside'
import AxisSelect from 'pages/visualization/AxisSelect'

class Visualization extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SinglePage>
          <PageHeader>
            <PageTitle>GapMap</PageTitle>
          </PageHeader>
          <VisualizationWrapper>
            <GraphContainer>
              <Graph width="1000" height="700" />
            </GraphContainer>
            <GraphAside>
              <AxisSelect />
              <SelectedNodes />
            </GraphAside>
          </VisualizationWrapper>
        </SinglePage>
        {/* TODO: remove below when selection works from graph */}
        <GraphAside>
          <NodeSelect />
        </GraphAside>
      </React.Fragment>
    )
  }
}

export default Visualization
