import React, { Component } from 'react'
import MonthDayCounts from './MonthDayCounts'

class StartDateSelector extends Component {
  static defaultProps = {
    appState: {}
  }
  render() {
    const months = Object.keys(MonthDayCounts)
    const days = MonthDayCounts[this.props.appState.holdmonth_start]
    return(
      <>
      FROM:<br/>
      <select key="start-month-selector" className="month-selector" onChange={e => this.props.handleState('holdmonth_start', e.target.value)}>
        {months.map((month, idx) => {
          return(
            <option key={idx}>{month}</option>
          )
        })}
      </select>
      <select key="start-day-selector" className="day-selector" onChange={e => this.props.handleState('holdday_start', e.target.value)}>
        <>{days}</>
      </select>
      <select key="start-year-selector" className="year-selector" onChange={e => this.props.handleState('holdyear_start', e.target.value)}>
        <option>2020</option>
        <option>2021</option>
      </select>
      </>
    )
  }
}

export default StartDateSelector