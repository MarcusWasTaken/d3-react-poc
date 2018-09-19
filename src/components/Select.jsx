import React from 'react'

class Select extends React.PureComponent {
  render() {
    const { value, options, onChange } = this.props

    return (
      <select value={value} onChange={onChange}>
        <option disabled value={''}>
          -- select an option --
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    )
  }
}

export default Select
