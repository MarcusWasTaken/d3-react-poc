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
import PageIllustrations from 'components/singlePage/PageIllustrations'
import Legend from 'components/Legend'

class ConceptPage extends React.Component {
  render() {
    const { concept, match } = this.props
    if (!concept) return null

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
        {concept.illustrations.length > 0 && (
          <PageIllustrations>
            <Legend>Illustrations</Legend>
            {concept.illustrations.map(illustration => (
              <PageFigure key={illustration.fileName}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/${
                    illustration.fileName
                  }`}
                  alt={illustration.title}
                />
                {illustration.caption && (
                  <figcaption>{illustration.caption}</figcaption>
                )}
              </PageFigure>
            ))}
          </PageIllustrations>
        )}

        {/* <PageComments>PageComments.jsx</PageComments> */}
      </ReportPage>
    )
  }
}

const mapStateToProps = (state, props) => ({
  concept: getConcepts(state).find(
    concept => concept.id == props.match.params.id
  )
})

export default connect(mapStateToProps)(ConceptPage)
