import React, { useState, useEffect } from 'react'
import moment from 'moment'

const DateEntry = props => {
  const { title, id, minDate, maxDate, setter } = props

  const [dateError, setDateError] = useState(false)
  const [day, setDay] = useState(null)
  const [month, setMonth] = useState(null)
  const [year, setYear] = useState(null)

  const changeDate = (e, setFunc) => setFunc(e.target.value)

  useEffect(() => {
    if (day && month && year) {
      const dateMoment = moment(`${day}/${month}/${year}`, 'D/M/YYYY', true)
      const validDate = dateMoment.isValid() && dateMoment.isBetween(minDate, maxDate)
      setDateError(!validDate)
      if (validDate) {
        setter(dateMoment)
      }
    }
  }, [day, month, year])

  return (
    <div>
      <h2>{title}</h2>
      <p className={dateError ? 'error' : ''}>
        {dateError ? `Please enter a correct date between ${minDate.format('DD/MM/YYYY')} and ${maxDate.format('DD/MM/YYYY')}` : ''}
      </p>
      <div className='date-input__item'>
        <label className='date-input__label'>
            Day
        </label>
        <input
          className={`input date-input__input input--width-2 ${dateError ? 'error' : ''}`} id={`${id}-date-day`}
          name='date-day' type='text' pattern='[0-9]*' inputMode='numeric' onChange={e => changeDate(e, setDay)}
        />
      </div>
      <div className='date-input__item'>
        <label className='date-input__label'>
            Month
        </label>
        <input
          className={`input date-input__input input--width-2 ${dateError ? 'error' : ''}`} id={`${id}-date-month`}
          name='date-month' type='text' pattern='[0-9]*' inputMode='numeric' onChange={e => changeDate(e, setMonth)}
        />
      </div>
      <div className='date-input__item'>
        <label className='date-input__label'>
            Year
        </label>
        <input
          className={`input date-input__input input--width-4 ${dateError ? 'error' : ''}`} id={`${id}-date-year`}
          name='date-year' type='text' pattern='[0-9]*' inputMode='numeric' onChange={e => changeDate(e, setYear)}
        />
      </div>
    </div>
  )
}

export default DateEntry
