import React, { Component } from 'react'
import './CurrentAdd.css'

class CurrentAdd extends Component {
    static defaultProps = {
        appState: {}
    }
    render() {
        return(
        <div className="current-add">
            <div className="current-add-header">CURRENTLY ADDING HOLDS FROM:</div>
            {this.props.appState.holdmonth_start} {this.props.appState.holdday_start}, {this.props.appState.holdyear_start} thru {this.props.appState.holdmonth_end} {this.props.appState.holdday_end}, {this.props.appState.holdyear_end}
        </div>
        )
    }
}

export default CurrentAdd