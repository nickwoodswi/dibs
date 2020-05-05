import React, { Component } from 'react'
import CurrentAdd from './CurrentAdd'
import MonthDayCounts from './MonthDayCounts'
import './SingleHold.css'

class SingleHold extends Component {
    static defaultProps = {
        appState: {}
    }
    render() {
        const months = Object.keys(MonthDayCounts)
        const days = MonthDayCounts[this.props.appState.holdmonth_start]
        return(
            <div className="single-hold-selector">
                FROM:
                <div className="date-selector">
                    <select key="start-month-selector" className="month-selector" onChange={e => this.props.handleSingleHold('holdmonth_start', 'holdmonth_end', e.target.value)}>
                        {months.map((month, idx) => {
                            return(
                                <option key={idx}>{month}</option>
                            )
                        })}
                    </select>
                    <select key="start-day-selector" className="day-selector" onChange={e => this.props.handleSingleHold('holdday_start', 'holdday_end', e.target.value)}>
                        <>{days}</>
                    </select>
                    <select key="start-year-selector" className="year-selector" onChange={e => this.props.handleSingleHold('holdyear_start', 'holdyear_end', e.target.value)}>
                        <option>2020</option>
                        <option>2021</option>
                    </select>
                </div>
                <CurrentAdd appState={this.props.appState} /><br/>
            </div>
        )
    }
}

export default SingleHold