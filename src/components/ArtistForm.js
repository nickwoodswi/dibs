import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import StartDateSelector from './StartDateSelector'
import EndDateSelector from './EndDateSelector'
import MultiHoldSelector from './MultiHoldSelector'
import SingleHold from './SingleHold'
import './ArtistForm.css'

class ArtistForm extends Component {

    componentDidMount() {
        console.log(this.props.routerProps)
    }
    
    static defaultProps = {
        appState: {}
    }

    render() {
        return(
            <div className="artist-form">
                <div className="hold-type-header">PLACING HOLD(S) ON:</div>
                <div className="hold-type-buttons">
                    <NavLink to="/artist/single" onClick={e => this.props.handleState('hold_type', e.target.value)}><div id="single" className="hold_type" value="single">A SINGLE DATE</div></NavLink>
                    <NavLink to="/artist/range" onClick={e => this.props.handleState('hold_type', e.target.value)}><div id="range" className="hold_type" value="range">A RANGE OF DATES</div></NavLink>
                    <NavLink to="/artist/multi" onClick={e => this.props.handleState('hold_type', e.target.value)}><div id="multiple" className="hold_type" value="multiple">MULTIPLE DATES</div></NavLink>
                </div>
                <Route path="/artist/single">
                    <SingleHold 
                        appState={this.props.appState} 
                        handleSingleHold={this.props.handleSingleHold}
                        submitForm={this.props.submitForm} />
                </Route>
                <Route path="/artist/range">
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
                <Route path="/artist/multi">
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
                Please link to your music, or a look at your performance:
                    <input type="text" value={this.props.appState.spotify} placeholder="Spotify Artist ID" onChange={e => this.props.handleState('spotify', e.target.value)} />
                    <input type="text" value={this.props.appState.youtube} type="text" placeholder="YouTube Channel or Video" onChange={e => this.props.handleState('youtube', e.target.value)} />
                    <input type="text" value={this.props.appState.facebook} type="text" placeholder="Facebook Page" onChange={e => this.props.handleState('facebook', e.target.value)} />
                    <input type="text" value={this.props.appState.bandcamp} type="text" placeholder="Bandcamp" onChange={e => this.props.handleState('bandcamp', e.target.value)} />
                    <input type="text" value={this.props.appState.website} type="text" placeholder="Website" onChange={e => this.props.handleState('website', e.target.value)} />
                </div>

                <div className="support-need">
                Do you need us to book local support?
                    <div className="support-radio">
                        <input type="radio" id="support_need" name="support_need" value="yes" onChange={e => this.props.handleState('support_need', e.target.value)} />Yes
                        <input type="radio" id="support_need" name="support_need" value="no" onChange={e => this.props.handleState('support_need', e.target.value)} />No
                    </div>
                </div>
                
                <div className="event-detail">
                    Provide any specific technical needs or details here:
                    <textarea id="event-detail" value={this.props.appState.event_detail} type="text" onChange={e => this.props.handleState('event_detail', e.target.value)}></textarea>
                </div>

                <div className="place-hold-button-container">
                    <div className="submit-button" onClick={e => this.props.submitForm()}>+PLACE HOLDS</div>
                </div>

            </div>
        )
    }
}

export default ArtistForm