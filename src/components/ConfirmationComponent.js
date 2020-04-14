import React, {Component} from 'react'
import './ConfirmationComponent.css'

class ConfirmationComponent extends Component {
    render() {
        return(
            <span className="confirmation-component"><h4><span className="hold-order">{this.props.holdOrder}H</span> - {this.props.holdDate}</h4></span>
        )
    }
}

export default ConfirmationComponent