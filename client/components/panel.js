import React, { useState, useEffect } from 'react'
import DateEntry from './date-entry'

const Panel = props => {
  const { dateToday, categories } = props

  const [dateFrom, setDateFrom] = useState(null)
  const [dateTo, setDateTo] = useState(null)
  const [category, setCategory] = useState(categories[0])
  const [result, setResult] = useState(null)
  const [dateError, setDateError] = useState(false)

  const selectCategory = e => setCategory(categories.find(c => c.category === e.target.value))

  useEffect(() => {
    if (dateFrom && dateTo && dateFrom.isAfter(dateTo)) {
      setDateError(true)
      return
    } else {
      setDateError(false)
    }

    if (dateFrom && dateTo && category) {
      const days = dateTo.diff(dateFrom, 'days') + 1
      const cost = category.rate * days
      const result = { category: category.category, days, cost }
      setResult(result)
    }
  }, [dateFrom, dateTo, category])

  return (
    <div>
      <h1>Check availability</h1>
      <select onChange={e => selectCategory(e)}>
        {categories.map(c => <option key={c.category} value={c.category}>{c.category}</option>)}
      </select>
      <DateEntry
        title='Start date'
        id='from'
        minDate={dateToday}
        maxDate={dateToday.clone().add(90, 'days')}
        setter={setDateFrom}
      />
      <DateEntry
        title='End date'
        id='to'
        minDate={dateToday}
        maxDate={dateToday.clone().add(90, 'days')}
        setter={setDateTo}
      />
      <p className={dateError ? 'error' : ''}>{dateError ? 'End date must be after start date' : ''}</p>
      <p>{result && !dateError ? `The cost of hiring a ${result.category} for ${result.days} days is £${result.cost}` : ''}</p>
    </div>
  )
}

export default Panel
