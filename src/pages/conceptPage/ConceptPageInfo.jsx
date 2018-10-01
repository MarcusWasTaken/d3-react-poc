import React from 'react'
import PropTypes from 'prop-types'
import PageInfo from 'components/singlePage/PageInfo'
import Legend from 'components/Legend'
import Fieldset from 'components/Fieldset'

class ConceptPageInfo extends React.PureComponent {
  static propTypes = {
    concept: PropTypes.shape({
      owner: PropTypes.string.isRequired,
      viewpoint: PropTypes.string,
      description: PropTypes.string,
      complexity: PropTypes.object.isRequired,
      links: PropTypes.array
    }).isRequired
  }

  render() {
    const {
      concept: { owner, viewpoint, description, complexity, links }
    } = this.props

    return (
      <Fieldset>
        <Legend>Information</Legend>
        <PageInfo>
          <dl>
            <dt>Owner</dt>
            <dd>{owner}</dd>
          </dl>
          <dl>
            <dt>Viewpoint</dt>
            <dd>{viewpoint}</dd>
          </dl>
          <dl>
            <dt>Description</dt>
            <dd>{description}</dd>
          </dl>
          <dl>
            <dt>Complexity</dt>
            <dd>{complexity.description}</dd>
            <dd>
              {`Number of disciplines (${
                complexity.disciplinces.length
              }): ${complexity.disciplinces.join(', ')}.`}
            </dd>
          </dl>
          <dl>
            <dt>Questions to answer for next TRL</dt>
            {/* <dd>{value.text}</dd>
          <dd>{`Specific value for Mycronic = ${value.value}`}</dd> */}
          </dl>
          <dl className="hideInPrint">
            <dt>Links</dt>
            <dd>
              {links.map(link => (
                <a key={link.displayName} href={link.url}>
                  {link.displayName}
                </a>
              ))}
            </dd>
          </dl>
        </PageInfo>
      </Fieldset>
    )
  }
}

export default ConceptPageInfo
