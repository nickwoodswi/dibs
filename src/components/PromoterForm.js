import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import StartDateSelector from './StartDateSelector'
import EndDateSelector from './EndDateSelector'
import MultiHoldSelector from './MultiHoldSelector'
import SingleHold from './SingleHold'
import './PromoterForm.css'

class PromoterForm extends Component {
  render() {
    return(
      <div className="promoter-form">
        <div className="hold-type-header">PLACING HOLD(S) ON:</div>
        <div className="hold-type-buttons">
          <Link to="/promoter/single"><button id="single" name="hold_type" value="single" onClick={e => this.props.handleState('hold_type', e.target.value)}>A SINGLE DATE</button></Link>
          <Link to="/promoter/range"><button id="range" name="hold_type" value="range" onClick={e => this.props.handleState('hold_type', e.target.value)}>A RANGE OF DATES</button></Link>
          <Link to="/promoter/multi"><button id="multiple" name="hold_type" value="multiple" onClick={e => this.props.handleState('hold_type', e.target.value)}>MULTIPLE DATES</button></Link>
        </div>
        <Route path="/promoter/single">
          <SingleHold 
            appState={this.props.appState} 
            handleSingleHold={this.props.handleSingleHold}
            submitForm={this.props.submitForm} />
        </Route>
        <Route path="/promoter/range">
          <div className="range-date-selector">
            <StartDateSelector 
              appState={this.props.appState} 
              handleState={this.props.handleState} 
              submitForm={this.props.submitForm}/><br/>
            <EndDateSelector 
              appState={this.props.appState} 
              handleState={this.props.handleState} />
          </div>
        </Route>
        <Route path="/promoter/multi">
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
            <input type="radio" id="band" name="performance_type" value="band" onChange={e => this.props.handleState('event_type', e.target.value)} />Band
            <input type="radio" id="solo" name="performance_type" value="solo" onChange={e => this.props.handleState('event_type', e.target.value)} />Solo Performer
            <input type="radio" id="dj" name="performance_type" value="dj" onChange={e => this.props.handleState('event_type', e.target.value)} />DJ
        </div>

        <div className="media">
          Please link to the headlining artist's music, or a look at their performance:
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
            <input onChange={e => this.props.handleState('dsupport_type', e.target.value)} type="radio" id="band-2" name="support_type-2" value="band" />Band
            <input onChange={e => this.props.handleState('dsupport_type', e.target.value)} type="radio" id="solo-2" name="support_type-2" value="solo" />Solo Performer
            <input onChange={e => this.props.handleState('dsupport_type', e.target.value)} type="radio" id="dj-2" name="support_type-2" value="dj" />DJ
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
            <input onChange={e => this.props.handleState('support_type3', e.target.value)} type="radio" id="band-3" name="support_type3" value="band" />Band
            <input onChange={e => this.props.handleState('support_type3', e.target.value)} type="radio" id="solo-3" name="support_type3" value="solo" />Solo Performer
            <input onChange={e => this.props.handleState('support_type3', e.target.value)} type="radio" id="dj-3" name="support_type3" value="dj" />DJ
          </div>

          <div className="media">
            <input type="text" onChange={e => this.props.handleState('spotify3', e.target.value)} value={this.props.appState.spotify3} placeholder="Spotify Artist ID" /><br/>
            <input type="text" onChange={e => this.props.handleState('youtube3', e.target.value)} value={this.props.appState.youtube3} placeholder="Youtube Video or Channel" /><br/>
            <input type="text" onChange={e => this.props.handleState('facebook3', e.target.value)} value={this.props.appState.facebook3} placeholder="Facebook Page" /><br/>
            <input type="text" onChange={e => this.props.handleState('bandcamp3', e.target.value)} value={this.props.appState.bandcamp3} placeholder="Bandcamp" /><br/>
            <input type="text" onChange={e => this.props.handleState('website3', e.target.value)} value={this.props.appState.website3} placeholder="Website" /><br/>
          </div>

          <div className="performance-type-detail">
            <input type="text" onChange={e => this.props.handleState('opener2_title', e.target.value)} value={this.props.appState.opener2_title} placeholder="Second Opener Title" />
            <input type="text" onChange={e => this.props.handleState('support_type4', e.target.value)} type="radio" id="band-4" name="support_type4" value="band" />Band
            <input type="text" onChange={e => this.props.handleState('support_type4', e.target.value)} type="radio" id="solo-4" name="support_type4" value="solo" />Solo Performer
            <input type="text" onChange={e => this.props.handleState('support_type4', e.target.value)} type="radio" id="dj-4" name="support_type4" value="dj" />DJ
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
          <input id="event-detail" type="text" onChange={e => this.props.handleState('event_detail', e.target.value)} value={this.props.appState.event_detail} />
        </div>

        <div className="org-detail">
          Your Organization: <input type="text" onChange={e => this.props.handleState('contact_org', e.target.value)} value={this.props.appState.contact_org} placeholder="Name" />
          Phone: <input type="text" onChange={e => this.props.handleState('contact_phone', e.target.value)} value={this.props.appState.contact_phone} placeholder="###" /><br/><br/>
          Mailing Address:
          <input type="text" onChange={e => this.props.handleState('org_street1', e.target.value)} value={this.props.appState.org_street1} placeholder="Street 1" />
          <input type="text" onChange={e => this.props.handleState('org_street2', e.target.value)} value={this.props.appState.org_street2} placeholder="Street 2" />
          <input type="text" onChange={e => this.props.handleState('org_city', e.target.value)} value={this.props.appState.org_city} placeholder="City" />
          <input type="text" onChange={e => this.props.handleState('org_country', e.target.value)} value={this.props.appState.org_country} placeholder="Country" />
          <input type="text" onChange={e => this.props.handleState('org_zip', e.target.value)} value={this.props.appState.org_zip} placeholder="Postal Code" />
        </div>

        <div className="place-hold-button-container">
          <Link to="/holdconfirmation"><button onClick={e => this.props.submitForm()}>PLACE HOLDS</button></Link>
        </div>

      </div>
    )
}
}

export default PromoterForm