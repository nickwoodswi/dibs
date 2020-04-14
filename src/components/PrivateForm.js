import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import StartDateSelector from './StartDateSelector'
import EndDateSelector from './EndDateSelector'
import MultiHoldSelector from './MultiHoldSelector'
import SingleHold from './SingleHold'
import './PrivateForm.css'

class PrivateForm extends Component {
    render() {
        return(
        <div className="private-form">
            <div className="hold-type-header">PLACING HOLD(S) ON:</div>
            <div className="hold-type-buttons">
                <Link to="/promoter/single"><button id="single" name="hold_type" value="single" onClick={e => this.props.handleState('hold_type', e.target.value)}>A SINGLE DATE</button></Link>
                <Link to="/promoter/range"><button id="range" name="hold_type" value="range" onClick={e => this.props.handleState('hold_type', e.target.value)}>A RANGE OF DATES</button></Link>
                <Link to="/promoter/multi"><button id="multiple" name="hold_type" value="multiple" onClick={e => this.props.handleState('hold_type', e.target.value)}>MULTIPLE DATES</button></Link>
            </div>
            <Route path="/private/single">
                <SingleHold 
                    appState={this.props.appState} 
                    handleSingleHold={this.props.handleSingleHold}
                    submitForm={this.props.submitForm} />
            </Route>
            <Route path="/private/range">
                <div className="range-date-selector">
                    <StartDateSelector 
                        appState={this.props.appState} 
                        handleState={this.props.handleState} />
                    <EndDateSelector 
                        appState={this.props.appState} 
                        handleState={this.props.handleState} />
                </div>
        </Route>
        <Route path="/private/multi">
            <MultiHoldSelector 
                appState={this.props.appState} 
                handleState={this.props.handleState} 
                addHold={this.props.addHold}
                deleteHold={this.props.deleteHold}
                submitForm={this.props.submitForm} />
        </Route>
        <div className="performance-type-detail">
            FOR:
            <input type="text" onChange={e => this.props.handleState('contact_act', e.target.value)} value={this.props.appState.contact_act} placeholder="Short Event Description" />
        </div>
        
        <div className="org-detail">
            Your Organization: <input type="text" onChange={e => this.props.handleState('contact_org', e.target.value)} value={this.props.appState.contact_org} placeholder="Name, if applicable" />
            Phone: <input type="text" onChange={e => this.props.handleState('contact_phone', e.target.value)} value={this.props.appState.contact_phone} placeholder="###" />
            Mailing Address:
            <input type="text" onChange={e => this.props.handleState('org_street1', e.target.value)} value={this.props.appState.org_street1} placeholder="Street 1" />
            <input type="text" onChange={e => this.props.handleState('org_street2', e.target.value)} value={this.props.appState.org_street2} placeholder="Street 2" />
            <input type="text" onChange={e => this.props.handleState('org_city', e.target.value)} value={this.props.appState.org_city} placeholder="City" />
            <input type="text" onChange={e => this.props.handleState('org_country', e.target.value)} value={this.props.appState.org_country} placeholder="Country" />
            <input type="text" onChange={e => this.props.handleState('org_zip', e.target.value)} value={this.props.appState.org_zip} placeholder="Postal Code" />
        </div>

            <div className="event-detail">
                Provide any specific event needs, ideas, or details here:
                <input type="text" id="event-detail" onChange={e => this.props.handleState('event_detail', e.target.value)} value={this.props.appState.event_detail} />
            </div>

            <div className="place-hold-button-container">
                <Link to="/holdconfirmation"><button onClick={e => this.props.submitForm()}>PLACE HOLDS</button></Link>
            </div>
        
        </div>
        )
    }
}

export default PrivateForm