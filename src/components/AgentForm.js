import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import StartDateSelector from './StartDateSelector'
import EndDateSelector from './EndDateSelector'
import MultiHoldSelector from './MultiHoldSelector'
import SingleHold from './SingleHold'
import './AgentForm.css'

class AgentForm extends Component {
  static defaultProps = {
    appState: {}
  }
  render() {
    return(
      <div className="agent-form">
        <div className="hold-type-header">PLACING HOLD(S) ON:</div>
        <div className="hold-type-buttons">
          <NavLink to="/agent/single"><div id="single" className="hold_type" value="single" onClick={e => this.props.handleState('hold_type', e.target.value)}>A SINGLE DATE</div></NavLink>
          <NavLink to="/agent/range"><div id="range" className="hold_type" value="range" onClick={e => this.props.handleState('hold_type', e.target.value)}>A RANGE OF DATES</div></NavLink>
          <NavLink to="/agent/multi"><div id="multiple" className="hold_type" value="multiple" onClick={e => this.props.handleState('hold_type', e.target.value)}>MULTIPLE DATES</div></NavLink>
        </div>
        <Route path="/agent/single">
          <SingleHold 
            appState={this.props.appState} 
            handleSingleHold={this.props.handleSingleHold}
            submitForm={this.props.submitForm} />
        </Route>
        <Route path="/agent/range">
          <div className="range-date-selector">
            <StartDateSelector 
              appState={this.props.appState} 
              handleState={this.props.handleState} 
              submitFOrm={this.props.submitForm}/><br/>
            <EndDateSelector 
              appState={this.props.appState} 
              handleState={this.props.handleState} />
          </div>
        </Route>
        <Route path="/agent/multi">
            <MultiHoldSelector 
              appState={this.props.appState} 
              handleState={this.props.handleState} 
              addHold={this.props.addHold}
              deleteHold={this.props.deleteHold}
              submitForm={this.props.submitForm}/>
        </Route>
        <div className="performance-type-detail">
          FOR:
            <input type="text" placeholder="Band, Artist, or Performer Title/Name" value={this.props.appState.contact_act} onChange={e => this.props.handleState('contact_act', e.target.value)} />
            <input type="text" placeholder="Your Home ZIP Code" value={this.props.appState.org_zip} onChange={e => this.props.handleState('org_zip', e.target.value)} />
            <div className="performer-type">
              <input type="radio" id="band" name="performance_type" value="band" onChange={e => this.props.handleState('event_type', e.target.value)} />Band
              <input type="radio" id="solo" name="performance_type" value="solo" onChange={e => this.props.handleState('event_type', e.target.value)} />Solo Performer
              <input type="radio" id="dj" name="performance_type" value="dj" onChange={e => this.props.handleState('event_type', e.target.value)} />DJ
            </div>
          </div>

        <div className="media">
          Please link to your client's music, or a look at their performance:
            <input type="text" value={this.props.appState.spotify} placeholder="Spotify Artist ID" onChange={e => this.props.handleState('spotify', e.target.value)} />
            <input type="text" value={this.props.appState.youtube} placeholder="YouTube Channel or Video" onChange={e => this.props.handleState('youtube', e.target.value)} />
            <input type="text" value={this.props.appState.facebook} placeholder="Facebook Page" onChange={e => this.props.handleState('facebook', e.target.value)} />
            <input type="text" value={this.props.appState.bandcamp} placeholder="Bandcamp" onChange={e => this.props.handleState('bandcamp', e.target.value)} />
            <input type="text" value={this.props.appState.website} placeholder="Website" onChange={e => this.props.handleState('website', e.target.value)} />
        </div>

        <div className="support-need">
          Do you need us to book local support?
            <input type="radio" id="support_need" name="support_need" value="yes" onChange={e => this.props.handleState('support_need', e.target.value)} />Yes
            <input type="radio" id="support_need" name="support_need" value="no" onChange={e => this.props.handleState('support_need', e.target.value)} />No
        </div>

          <div className="package-support-header">PACKAGE SUPPORT</div>

          <div className="performance-type-detail">
            <input type="text" onChange={e => this.props.handleState('dsupport_title', e.target.value)} value={this.props.appState.dsupport_title} placeholder="Direct Support" />
            <div className="performer-type">
              <input onChange={e => this.props.handleState('dsupport_type', e.target.value)} type="radio" id="band-2" name="support_type-2" value="band" />Band
              <input onChange={e => this.props.handleState('dsupport_type', e.target.value)} type="radio" id="solo-2" name="support_type-2" value="solo" />Solo Performer
              <input onChange={e => this.props.handleState('dsupport_type', e.target.value)} type="radio" id="dj-2" name="support_type-2" value="dj" />DJ
            </div>
          </div>

          <div className="media">
            <input type="text" onChange={e => this.props.handleState('spotify2', e.target.value)} value={this.props.appState.spotify2} placeholder="Spotify Artist ID" />
            <input type="text" onChange={e => this.props.handleState('youtube2', e.target.value)} value={this.props.appState.youtube2} placeholder="YouTube Video or Channel" />
            <input type="text" onChange={e => this.props.handleState('facebook2', e.target.value)} value={this.props.appState.facebook2} placeholder="Facebook Page" />
            <input type="text" onChange={e => this.props.handleState('bandcamp2', e.target.value)} value={this.props.appState.bandcamp2} placeholder="Bandcamp" />
            <input type="text" onChange={e => this.props.handleState('website2', e.target.value)} value={this.props.appState.website2} placeholder="Website" />
          </div>

          <div className="performance-type-detail">
            <input type="text" onChange={e => this.props.handleState('opener_title', e.target.value)} value={this.props.appState.opener_title} placeholder="Opener" />
            <div className="performer-type">
              <input onChange={e => this.props.handleState('support_type3', e.target.value)} type="radio" id="band-3" name="support_type3" value="band" />Band
              <input onChange={e => this.props.handleState('support_type3', e.target.value)} type="radio" id="solo-3" name="support_type3" value="solo" />Solo Performer
              <input onChange={e => this.props.handleState('support_type3', e.target.value)} type="radio" id="dj-3" name="support_type3" value="dj" />DJ
            </div>
          </div>

          <div className="media">
            <input type="text" onChange={e => this.props.handleState('spotify3', e.target.value)} value={this.props.appState.spotify3} placeholder="Spotify Artist ID" /><br/>
            <input type="text" onChange={e => this.props.handleState('youtube3', e.target.value)} value={this.props.appState.youtube3} placeholder="Youtube Video or Channel" /><br/>
            <input type="text" onChange={e => this.props.handleState('facebook3', e.target.value)} value={this.props.appState.facebook3} placeholder="Facebook Page" /><br/>
            <input type="text" onChange={e => this.props.handleState('bandcamp3', e.target.value)} value={this.props.appState.bandcamp3} placeholder="Bandcamp" /><br/>
            <input type="text" onChange={e => this.props.handleState('website3', e.target.value)} value={this.props.appState.website3} placeholder="Website" /><br/>
          </div>

          <div className="performance-type-detail">
            <input type="text" onChange={e => this.props.handleState('opener2_title', e.target.value)} value={this.props.appState.opener2_title} placeholder="Second Opener" />
            <div className="performer-type">
              <input type="text" onChange={e => this.props.handleState('support_type4', e.target.value)} type="radio" id="band-4" name="support_type4" value="band" />Band
              <input type="text" onChange={e => this.props.handleState('support_type4', e.target.value)} type="radio" id="solo-4" name="support_type4" value="solo" />Solo Performer
              <input type="text" onChange={e => this.props.handleState('support_type4', e.target.value)} type="radio" id="dj-4" name="support_type4" value="dj" />DJ
            </div>
          </div>

          <div className="media">
            <input type="text" onChange={e => this.props.handleState('spotify4', e.target.value)} value={this.props.appState.spotify4} placeholder="Spotify Artist ID" /><br/>
            <input type="text" onChange={e => this.props.handleState('youtube4', e.target.value)} value={this.props.appState.youtube4} placeholder="YouTube Video or Channel" /><br/>
            <input type="text" onChange={e => this.props.handleState('facebook4', e.target.value)} value={this.props.appState.facebook4} placeholder="Facebook Page" /><br/>
            <input type="text" onChange={e => this.props.handleState('bandcamp4', e.target.value)} value={this.props.appState.bandcamp4} placeholder="Bandcamp" /><br/>
            <input type="text" onChange={e => this.props.handleState('website4', e.target.value)} value={this.props.appState.website4} placeholder="Website" /><br/>
          </div>
          

          <div className="event-detail">
            Provide any specific technical needs or details here:
            <textarea id="event-detail" value={this.props.appState.event_detail} type="text" onChange={e => this.props.handleState('event_detail', e.target.value)}></textarea>
          </div>

        <div className="org-detail">
          Agency: <input type="text" onChange={e => this.props.handleState('contact_org', e.target.value)} value={this.props.appState.contact_org} placeholder="Name" />
          Phone: <input type="text" onChange={e => this.props.handleState('contact_phone', e.target.value)} value={this.props.appState.contact_phone} placeholder="###" /><br/><br/>
          Mailing Address:
          <input type="text" onChange={e => this.props.handleState('org_street1', e.target.value)} value={this.props.appState.org_street1} placeholder="Street 1" />
          <input type="text" onChange={e => this.props.handleState('org_street2', e.target.value)} value={this.props.appState.org_street2} placeholder="Street 2" />
          <input type="text" onChange={e => this.props.handleState('org_city', e.target.value)} value={this.props.appState.org_city} placeholder="City" />
          <input type="text" onChange={e => this.props.handleState('org_country', e.target.value)} value={this.props.appState.org_country} placeholder="Country" />
          <input type="text" onChange={e => this.props.handleState('org_zip', e.target.value)} value={this.props.appState.org_zip} placeholder="Postal Code" />
        </div>

        <div className="place-hold-button-container">
          <NavLink to="/holdconfirmation"><div className="submit-button" onClick={e => this.props.submitForm()}>+PLACE HOLDS</div></NavLink>
        </div>

      </div>
    )
}
}

export default AgentForm