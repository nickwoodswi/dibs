import React, { Component } from 'react'
import MonthDayCounts from './components/MonthDayCounts'
import { NavLink } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import ArtistForm from './components/ArtistForm'
import AgentForm from './components/AgentForm'
import PromoterForm from './components/PromoterForm'
import PrivateForm from './components/PrivateForm'
import './App.css'
import Landing from './components/Landing.js'
import HoldConfirmation from './components/HoldConfirmation.js'
import config from './config'
const API_URL=config.API_URL


class App extends Component {

  constructor() {
    super()
    this.state = {  
      date_of_req: new Date(), 
      hold_type: "single",
      holdmonth_start: "January",
      holdmonth_end: "January",
      holdday_start: "1",
      holdday_end: "1",
      holdyear_start: "2020",
      holdyear_end: "2020",
      holds: [],
      holds_added: [],
      contact_type: "", 
      event_type: "", 
      support_need: "", 
      dsupport_type: "", 
      support_type3: "", 
      support_type4: "", 
      hold_firstname: "", 
      hold_lastname: "", 
      hold_email: "",
      contact_act: "",
      spotify: "",
      youtube: "",
      facebook: "",
      bandcamp: "",
      website: "",
      dsupport_title: "",
      spotify2: "",
      youtube2: "",
      facebook2: "",
      bandcamp2: "",
      website2: "",
      opener_title: "",
      spotify3: "",
      youtube3: "",
      facebook3: "",
      bandcamp3: "",
      website3: "",
      opener2_title: "",
      spotify4: "",
      youtube4: "",
      facebook4: "",
      bandcamp4: "",
      website4: "",
      contact_org: "",
      contact_phone: "",
      org_street1: "",
      org_street2: "",
      org_city: "",
      org_country: "",
      org_zip: "",
      event_detail: ""
    }
  }

  handleState = (propName, value, routerProps) => {
    let changes = {}
    if (propName == 'hold_type') {
      changes = {
        holdmonth_start: "January",
        holdmonth_end: "January",
        holdday_start: "1",
        holdday_end: "1",
        holdyear_start: "2020",
        holdyear_end: "2020",
        holds: []
      }
    }
    this.setState({
      [propName]: value,
      ...changes
    })
  }

  handleSingleHold = (startProp, endProp, value) => {
    this.setState({
      [startProp]: value,
      [endProp]: value
    })
  }

  addHold = () => {
      this.setState({
          holds: this.state.holds.concat({
          holdmonth_start: this.state.holdmonth_start,
          holdmonth_end: this.state.holdmonth_end,
          holdday_start: this.state.holdday_start,
          holdday_end: this.state.holdday_end,
          holdyear_start: this.state.holdyear_start,
          holdyear_end: this.state.holdyear_end
        })
      })
    }
  
  deleteHold = (
      startMonthPrev, 
      startDayPrev,
      startYearPrev,
      endMonthPrev,
      endDayPrev,
      endYearPrev
  ) => {
    this.setState({
      holds: this.state.holds.filter(
        hold => 
        !(hold.holdmonth_start == startMonthPrev &&
        hold.holdmonth_end == endMonthPrev &&
        hold.holdday_start == startDayPrev &&
        hold.holdday_end == endDayPrev &&
        hold.holdyear_start == startYearPrev &&
        hold.holdyear_end == endYearPrev)
      )
    })
  }

  submitForm = (routerProps) => {
    
    //get form state
    const state = {...this.state}
    const path = routerProps.location.pathname.split('/')[2]
    state.hold_type = path
    //set holds to post for single date ranges
    if (state.hold_type == 'single' || state.hold_type == 'range') {
      state.holds = [{
        holdmonth_start: state.holdmonth_start,
        holdmonth_end: state.holdmonth_end,
        holdday_start: state.holdday_start,
        holdday_end: state.holdday_end,
        holdyear_start: state.holdyear_start,
        holdyear_end: state.holdyear_end
      }]
    }

    //check for required form inputs
    if (!state.hold_firstname || !state.hold_lastname) {
      alert('First name and last name are required!')
      return 
    } 
    if (!state.hold_email) {
      alert('Your email address is required!')
      return
    }
    if (!state.contact_act) {
      alert('No headliner or event description listed!')
      return
    }
    if (!state.org_zip) {
      alert('Your ZIP code is required!')
      return
    }

    let holdDatesArray = []
    for (let i = 0; i < state.holds.length; i++) {
      const hold = state.holds[i]
      let startMonthIndex = Object.keys(MonthDayCounts).indexOf(hold.holdmonth_start)
      let endMonthIndex = Object.keys(MonthDayCounts).indexOf(hold.holdmonth_end)
      let holdRangeStart = new Date(hold.holdyear_start, startMonthIndex, hold.holdday_start)
      let holdRangeEnd = new Date(hold.holdyear_end, endMonthIndex, hold.holdday_end)
      let holdCount = (holdRangeEnd.getTime()-holdRangeStart.getTime())/(1000*60*60*24)+1
      let pastCheck = new Date(holdRangeStart).getTime() - new Date()
      if (Math.sign(pastCheck) === -1) {
        alert('One or more of your holds starts in the past!')
        return
      }
      if (Math.sign(holdCount) === -1) {
        alert('One or more of your hold ranges is backward!')
        return
      }
      //build date objects for holds
      for (let i = 1; i <= holdCount; i++) {
        holdDatesArray.push(new Date(holdRangeStart))
        holdRangeStart.setDate(holdRangeStart.getDate() + 1)
      }
    }
    
    //build a hold object for each date object
    const holds = []

    holdDatesArray.map(hold => {

      holds.push({  
        date_of_req: new Date(), 
        hold_date: hold,
        hold_status: 'new',
        contact_type: this.state.contact_type, 
        event_type: this.state.event_type, 
        support_need: this.state.support_need, 
        dsupport_type: this.state.dsupport_type, 
        support_type3: this.state.support_type3, 
        support_type4: this.state.support_type4, 
        hold_firstname: this.state.hold_firstname, 
        hold_lastname: this.state.hold_lastname, 
        hold_email: this.state.hold_email,
        contact_act: this.state.contact_act,
        spotify: this.state.spotify,
        youtube: this.state.youtube,
        facebook: this.state.facebook,
        bandcamp: this.state.bandcamp,
        website: this.state.website,
        dsupport_title: this.state.dsupport_title,
        spotify2: this.state.spotify2,
        youtube2: this.state.youtube2,
        facebook2: this.state.facebook2,
        bandcamp2: this.state.bandcamp2,
        website2: this.state.website2,
        opener_title: this.state.opener_title,
        spotify3: this.state.spotify3,
        youtube3: this.state.youtube3,
        facebook3: this.state.facebook3,
        bandcamp3: this.state.bandcamp3,
        website3: this.state.website3,
        opener2_title: this.state.opener2_title,
        spotify4: this.state.spotify4,
        youtube4: this.state.youtube4,
        facebook4: this.state.facebook4,
        bandcamp4: this.state.bandcamp4,
        website4: this.state.website4,
        contact_org: this.state.contact_org,
        contact_phone: this.state.contact_phone,
        org_street1: this.state.org_street1,
        org_street2: this.state.org_Street2,
        org_city: this.state.org_city,
        org_country: this.state.org_country,
        org_zip: this.state.org_zip,
        event_detail: this.state.event_detail
      })
    })

    //get holds in db and compare new holds to set hold order
    fetch(`${API_URL}/holds/dates`, {
      method: 'GET',
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(response => response.json())
      .then(data => {
        holds.map(hold => {
          let holdOrder = 1
          data.map(holdInDb => {
            if (holdInDb.hold_date.toString().substr(0, 26) == hold.hold_date.toString().substr(0, 26)) {holdOrder++}
          })
          hold.hold_number = holdOrder
          let confirmationObj = {}
          confirmationObj[hold.hold_date] = hold.hold_number
          this.setState({
            holds_added: [...this.state.holds_added, confirmationObj]
          })
          // this.state.holds_added.push(confirmationObj)
        })
        this.handleAddHolds(holds, routerProps)
      })    
  }

  handleAddHolds(holds, routerProps) {

    //post new holds
    const promises = holds.map(hold => {
      return fetch(`${API_URL}/holds`, {
        method: 'POST',
        body: JSON.stringify(hold),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => response.json())
      .then(hold => {
        this.setState({
          holds: this.state.holds.filter(
            hold => !(hold)
          )
        })
      })
    })
    Promise.all(promises)
    .then(data => {
      routerProps.history.push('/confirmation')
    })
  }

  render () {
    return (
      <>
      <header>

        <h1>DIBS</h1>

      </header>
      <nav>
        <NavLink to='/about'><div className="navlink">ABOUT</div></NavLink>
        <NavLink to='/' exact><div className="navlink">FORM</div></NavLink>
        <a href="https://dibs-admin.nickwoodswi.now.sh/" target="_blank"><div className="navlink">BACK OFFICE</div></a>
      </nav>
      <main className='App'>
        <Switch>
          <Route path='/confirmation' render={routerProps => (
            <HoldConfirmation holds_added={this.state.holds_added} />
          )} />
          <Route path='/about'><Landing /></Route>

        <Route path='/'>

          <div className="form-intro"><h2>PLACE A HOLD INSTANTLY:</h2></div>

          <div className='contact-spec'>
            <div className="first-name">YOUR FIRST NAME: <input type="text" value={this.state.hold_firstname} placeholder="David" onChange={e => this.setState({ hold_firstname: e.target.value })} /></div> 
            <div className="last-name">YOUR LAST NAME: <input type="text" value={this.state.hold_lastname} placeholder="Roth" onChange={e => this.setState({ hold_lastname: e.target.value })} /></div>
            <div className="email">YOUR E-MAIL: <input type="text" value={this.state.hold_email} placeholder="youremail@email.com" onChange={e => this.setState({ hold_email: e.target.value })} /></div>
          </div>

          <div className='contact-types'>
            <div className="contact-types-header">I AM A/AN: </div>
            <NavLink to='/artist'><div className='contact-type' onClick={e => this.setState({ contact_type: 'artist' })}>ARTIST</div></NavLink> 
            <NavLink to='/agent'><div className='contact-type' onClick={e => this.setState({ contact_type: 'agent' })}>AGENT</div></NavLink> 
            <NavLink to='/promoter'><div className='contact-type' onClick={e => this.setState({ contact_type: 'promoter' })}>PROMOTER</div></NavLink> 
            <NavLink to='/private'><div className='contact-type' onClick={e => this.setState({ contact_type: 'private' })}>PRIVATE PARTY</div></NavLink>
          </div>

          <div className="contact-type-form">
            <div className="contact-form">
              <Route path='/artist' render={routerProps => (
                <ArtistForm 
                  appState={this.state} 
                  handleState={this.handleState} 
                  handleSingleHold={this.handleSingleHold}
                  addHold={this.addHold}
                  routerProps={routerProps}
                  deleteHold={this.deleteHold}
                  submitForm={this.submitForm.bind(this, routerProps)} />
              )} />
              <Route path='/agent' render={routerProps => (
                <AgentForm 
                  appState={this.state} 
                  handleState={this.handleState} 
                  handleSingleHold={this.handleSingleHold}
                  addHold={this.addHold}
                  deleteHold={this.deleteHold}
                  submitForm={this.submitForm.bind(this, routerProps)} />
              )} />
              <Route path='/promoter' render={routerProps => (
                <PromoterForm 
                  appState={this.state} 
                  handleState={this.handleState} 
                  handleSingleHold={this.handleSingleHold}
                  addHold={this.addHold}
                  deleteHold={this.deleteHold}
                  submitForm={this.submitForm.bind(this, routerProps)} />
              )} />
              <Route path='/private' render={routerProps => (
                <PrivateForm 
                  appState={this.state} 
                  handleState={this.handleState} 
                  handleSingleHold={this.handleSingleHold}
                  addHold={this.addHold}
                  deleteHold={this.deleteHold}
                  submitForm={this.submitForm.bind(this, routerProps)} />
              )} />
            </div>
          </div>
        </Route>
        </Switch>

      </main>
      </>
    )
  }
}
export default App;

