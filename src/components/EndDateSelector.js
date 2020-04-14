import React, { Component } from 'react'
import CurrentAdd from './CurrentAdd'
import MonthDayCounts from './MonthDayCounts'

class EndDateSelector extends Component {
  static defaultProps = {
    appState: {}
  }
    render() {
      const months = Object.keys(MonthDayCounts)
      const days = MonthDayCounts[this.props.appState.holdmonth_end]
      return(
        <>
        THRU: <br/>
        <select key="end-month-selector" className="end-month-selector" onChange={e => this.props.handleState('holdmonth_end', e.target.value)}>
          {months.map((month, idx) => {
            return(
              <option key={idx}>{month}</option>
            )
          })}
        </select>
        <select key="end-day-selector" className="end-day-selector" onChange={e => this.props.handleState('holdday_end', e.target.value)}>
          <>{days}</>
        </select>
        <select key="end-year-selector" className="end-year-selector" onChange={e => this.props.handleState('holdyear_end', e.target.value)}>
            <option>2020</option>
            <option>2021</option>
        </select>
        <CurrentAdd appState={this.props.appState} /><br/>
        </>
      )
    }
  }
  
  export default EndDateSelector