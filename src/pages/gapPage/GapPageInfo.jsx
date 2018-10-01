import React from 'react'
import PropTypes from 'prop-types'
import PageInfo from 'components/singlePage/PageInfo'
import Legend from 'components/Legend'
import Fieldset from 'components/Fieldset'

class GapPageInfo extends React.PureComponent {
  static propTypes = {
    gap: PropTypes.shape({
      owner: PropTypes.string.isRequired,
      viewpoint: PropTypes.string,
      description: PropTypes.string,
      quantification: PropTypes.object.isRequired,
      value: PropTypes.object.isRequired,
      links: PropTypes.array
    }).isRequired
  }

  render() {
    const {
      gap: { owner, viewpoint, description, quantification, value, links }
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
            <dt>Textual description</dt>
            <dd>{description}</dd>
          </dl>
          <dl>
            <dt>Quantification</dt>
            <dd>Unit = {quantification.unit}</dd>
            <dd>Measurement = {quantification.measurement}</dd>
            <dd>Worst = {quantification.worst}</dd>
            <dd>Goal = {quantification.goal}</dd>
            <dd>Best = {quantification.best}</dd>
            <dd>Current = {quantification.current}</dd>
          </dl>
          <dl>
            <dt>Value</dt>
            <dd>{value.text}</dd>
            <dd>{`Specific value for Mycronic = ${value.value}`}</dd>
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

export default GapPageInfo
