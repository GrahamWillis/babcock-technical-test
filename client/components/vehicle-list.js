import React from 'react'
import Vehicle from './vehicle'

const VehicleList = props => {
  const { vehicles } = props

  return (
    <table>
      <thead>
        <tr>
          <th>Registration Number</th>
          <th>Category</th>
          <th>Make</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {vehicles.map(vehicle =>
          <Vehicle
            key={vehicle.registrationNbr}
            vehicle={vehicle}
          />)}
      </tbody>
    </table>
  )
}

export default VehicleList
