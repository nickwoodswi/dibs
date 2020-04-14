import React, { Component } from 'react'
import './HoldPreviewComp.css'

class HoldPreviewComp extends Component {
    render() {
        return(
            <div className="holdPreview">
                {this.props.startMonthPrev}<> </> 
                {this.props.startDayPrev},<> </> 
                {this.props.startYearPrev}<> </>  - <> </> 
                {this.props.endMonthPrev}<> </> 
                {this.props.endDayPrev},<> </> 
                {this.props.endYearPrev}<> </> 
                <button id="delete-button" onClick={() => this.props.deleteHold(
                    this.props.startMonthPrev, 
                    this.props.startDayPrev,
                    this.props.startYearPrev,
                    this.props.endMonthPrev,
                    this.props.endDayPrev,
                    this.props.endYearPrev,
                )}>REMOVE</button>
            </div>
        )
    }
}

export default HoldPreviewComp