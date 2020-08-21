import React from 'react'

const Availability = props => {
  const { setShowAvailable, showAvailable } = props

  const toggleAvailability = () => {
    setShowAvailable(!showAvailable)
  }

  return (
    <div>
      <label>
        <input
          type='checkbox'
          value='available'
          checked={showAvailable}
          onChange={() => toggleAvailability()}
        />
        Show available now
      </label>
    </div>)
}

export default Availability
