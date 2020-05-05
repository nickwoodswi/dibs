import React, { Component } from 'react'
import StartDateSelector from './StartDateSelector'
import EndDateSelector from './EndDateSelector' 
import HoldPreview from './HoldPreview'
import MultiHoldSelector from './MultiHoldSelector.css'

class MultiDateSelector extends Component {
  static defaultProps = {
    appState: {
      holds: []
    }
  }
    render() {
      return(
        <div className="multi-date-selector">
          <div className="range-selector">
            <StartDateSelector 
              appState={this.props.appState} 
              handleState={this.props.handleState} /><br/>
            <EndDateSelector 
              appState={this.props.appState} 
              handleState={this.props.handleState} /><br/>
          </div>
          <button className="add-hold-range-button"
              id="add-hold-range" 
              onClick={this.props.addHold}>
          +ADD HOLD RANGE</button><br/>
          <HoldPreview appState={this.props.appState} deleteHold={this.props.deleteHold} />
        </div>
      )
    }
  }
  
  export default MultiDateSelector