import React from 'react'
import { connect } from 'react-redux'
import { getGaps } from 'containers/app/selectors'
import SinglePage from 'components/SinglePage'
import PageHeader from 'components/singlePage/PageHeader'
import PageTitle from 'components/singlePage/PageTitle'
import PageSubTitle from 'components/singlePage/PageSubTitle'
import PageFigure from 'components/singlePage/PageFigure'
import PageComments from 'components/singlePage/PageComments'
import GapPageInfo from './gapPage/GapPageInfo'

class GapPage extends React.Component {
  render() {
    const { gap, match } = this.props
    return (
      <SinglePage>
        <PageHeader id={match.params.id}>
          <PageTitle>{gap.title.toUpperCase()} gap</PageTitle>
          <PageSubTitle>Created {gap.creationDate}</PageSubTitle>
        </PageHeader>
        <GapPageInfo gap={gap} />
        {gap.image && (
          <PageFigure>
            <img
              src={`${process.env.PUBLIC_URL}/images/${gap.image.fileName}`}
              alt={gap.image.caption}
            />
            {gap.image.caption && <figcaption>{gap.image.caption}</figcaption>}
          </PageFigure>
        )}
        <PageComments>PageComments.jsx</PageComments>
      </SinglePage>
    )
  }
}

const mapStateToProps = (state, props) => ({
  gap: getGaps(state)[props.match.params.id]
})

export default connect(mapStateToProps)(GapPage)
