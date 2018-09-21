import React from 'react'
import { connect } from 'react-redux'
import { getConcepts } from 'containers/app/selectors'
import ReportPage from 'components/ReportPage'
import PageHeader from 'components/singlePage/PageHeader'
import PageTitle from 'components/singlePage/PageTitle'
import PageFigure from 'components/singlePage/PageFigure'
import PageComments from 'components/singlePage/PageComments'
import ConceptPageInfo from './conceptPage/ConceptPageInfo'
import PageDateTitle from 'components/singlePage/PageDateTitle'

class ConceptPage extends React.Component {
  render() {
    const { concept, match } = this.props
    return (
      <ReportPage>
        <PageHeader QRUrl={`concept/${match.params.id}`}>
          <PageTitle>{concept.title.toUpperCase()} concept</PageTitle>
          <PageDateTitle
            creationDate={concept.creationDate}
            changedDate={concept.changeDate}
          />
        </PageHeader>
        <ConceptPageInfo concept={concept} />
        {concept.image && (
          <PageFigure>
            <img
              src={`${process.env.PUBLIC_URL}/images/${concept.image.fileName}`}
              alt={concept.image.caption}
            />
            {concept.image.caption && (
              <figcaption>{concept.image.caption}</figcaption>
            )}
          </PageFigure>
        )}
        <PageComments>PageComments.jsx</PageComments>
      </ReportPage>
    )
  }
}

const mapStateToProps = (state, props) => ({
  concept: getConcepts(state)[props.match.params.id]
})

export default connect(mapStateToProps)(ConceptPage)
