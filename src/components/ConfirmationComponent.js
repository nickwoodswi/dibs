import React, {Component} from 'react'
import './ConfirmationComponent.css'

class ConfirmationComponent extends Component {
    render() {
        const date = new Date(this.props.holdDate)
        return(
            <span className="confirmation-component"><h4><span className="hold-order">{this.props.holdOrder}H</span> - {date.toLocaleString()}</h4></span>
        )
    }
}

export default ConfirmationComponent