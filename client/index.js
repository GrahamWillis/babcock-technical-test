import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './components/dashboard'
import './styles.css'

function render () {
  ReactDOM.render(
    <Dashboard />,
    document.getElementById('root')
  )
}

render()
