import React, { Component } from 'react'
import HoldPreviewComp from './HoldPreviewComp'
import './HoldPreview.css'

class HoldPreview extends Component {
    static defaultProps = {
        appState: {
            holds: []
        }
    }
    render() {
        const holds = this.props.appState.holds
        return(
            <>
            <div className="multi-hold-preview">
                {holds.map((hold, idx) => {
                    return(
                    <HoldPreviewComp
                        key={idx}
                        startMonthPrev={hold.holdmonth_start}
                        startDayPrev={hold.holdday_start}
                        startYearPrev={hold.holdyear_start}
                        endMonthPrev={hold.holdmonth_end}
                        endDayPrev={hold.holdday_end}
                        endYearPrev={hold.holdyear_end} 
                        deleteHold = {this.props.deleteHold} />
                    )
                })}
            </div>
            </>
        )
    }
}

export default HoldPreview