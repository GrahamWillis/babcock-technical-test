import React, { useState, useEffect } from 'react'
import VehicleList from './vehicle-list'
import Panel from './panel'
import Availability from './availability'
import { vehicles } from '../data/vehicles'
import { customers } from '../data/customers'
import { categories } from '../data/categories'
import moment from 'moment'

// For the purposes of this, this if fixed along with the data
const dateToday = '28/09/2020'
const df = 'DD/MM/YYYY'

const Dashboard = () => {
  const [showAvailable, setShowAvailable] = useState(false)

  const outForHire = [].concat(...customers.map(c => []
    .concat(...c.hires.filter(h => moment(dateToday, df)
      .isBetween(moment(h.startDate, df), moment(h.endDate, df)))
      .map(h => h.registrationNbr))))

  const availabilityFilter = (showAvailable, v) => !showAvailable ? true : !outForHire.includes(v.registrationNbr)

  return (
    <div>
      <h1>Hire Vehicles</h1>
      <VehicleList
        vehicles={vehicles.filter(v => availabilityFilter(showAvailable, v))}
      />
      <Availability
        setShowAvailable={setShowAvailable}
        showAvailable={showAvailable}
      />
      <Panel
        dateToday={moment(dateToday, df)}
        categories={categories}
      />
    </div>
  )
}

export default Dashboard
