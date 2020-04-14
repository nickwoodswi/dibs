import React, {Component} from 'react'
import ConfirmationComponent from './ConfirmationComponent'
import './HoldConfirmation.css'

class HoldConfirmation extends Component {
    render() {
        if (!this.props.holds_added) {
            return <h1>Waiting to add holds...</h1>
        }
        else {
            return(
                <div className="hold-confirmation">
                    <div className="hold-confirmation-ack">
                        <h2><i>THANKS FOR PLACING HOLDS AT OUR VENUE!</i></h2>
                        <h3>We will respond with questions, concerns, and/or an offer within the next 48 hours, or within 4 months of your hold dates - whichever comes later. <br/>
                        <br/>
                        <i>Your order for the following dates is currently:</i> </h3>
                    </div>
                    <div className="date-order">
                        {this.props.holds_added.map(hold => {
                            return(
                                <ConfirmationComponent 
                                    holdDate={Object.keys(hold)}
                                    holdOrder={Object.values(hold)} />
                            )
                        })}
                    </div>
                    <div className="follow-up">
                        <p>Please feel free to follow up with Nick Woods at <a href="mailto:nick.woods.wi@gmail.com">nick.woods.wi@gmail.com</a> to challenge existing holds above yours, release your holds, or confirm an offer. We use DIBS to track holds on our calendar, and will notify you of any status changes to any of the holds you just placed.</p>
                    </div>
                </div>
            )
        }
    }
}

export default HoldConfirmation