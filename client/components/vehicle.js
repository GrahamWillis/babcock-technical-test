import React from 'react'

const Vehicle = props => {
  const { vehicle } = props

  return (
    <tr key={vehicle.registrationNbr}>
      <td>{vehicle.registrationNbr}</td>
      <td>{vehicle.category}</td>
      <td>{vehicle.make}</td>
      <td>{vehicle.type}</td>
    </tr>
  )
}

export default Vehicle
