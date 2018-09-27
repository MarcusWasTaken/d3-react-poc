import React from 'react'
import { connect } from 'react-redux'
import { getGaps } from 'containers/app/selectors'
import ReportPage from 'components/ReportPage'
import PageHeader from 'components/singlePage/PageHeader'
import PageTitle from 'components/singlePage/PageTitle'
import PageFigure from 'components/singlePage/PageFigure'
import PageComments from 'components/singlePage/PageComments'
import GapPageInfo from './gapPage/GapPageInfo'
import PageDateTitle from 'components/singlePage/PageDateTitle'

class GapPage extends React.Component {
  render() {
    const { gap, match } = this.props
    if (!gap) return null

    return (
      <ReportPage>
        <PageHeader QRUrl={`gap/${match.params.id}`}>
          <PageTitle>{gap.title.toUpperCase()} gap</PageTitle>
          <PageDateTitle
            creationDate={gap.creationDate}
            changedDate={gap.changeDate}
          />
        </PageHeader>
        <GapPageInfo gap={gap} />
        {gap.illustrations.map(illustration => (
          <PageFigure key={illustration.fileName}>
            <img
              src={`${process.env.PUBLIC_URL}/images/${illustration.fileName}`}
              alt={illustration.title}
            />
            {illustration.caption && (
              <figcaption>{illustration.caption}</figcaption>
            )}
          </PageFigure>
        ))}
        <PageComments>PageComments.jsx</PageComments>
      </ReportPage>
    )
  }
}

const mapStateToProps = (state, props) => ({
  gap: getGaps(state).find(gap => gap.id == props.match.params.id)
})

export default connect(mapStateToProps)(GapPage)
