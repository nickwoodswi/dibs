import React, { Component } from 'react'
import SingleHold from './components/SingleHold'
import RangeHold from './components/RangeHold'
import MultiHold from './components/MultiHold'

const sections = [
  {
    type: 'Artist',
    content: 
    <>
    <><input id="contact_act" type="text" placeholder="Band, Artist, or Performer Title/Name" /></><br/>
    <><input type="radio" id="band" name="performance_type" value="band" />Band</>
    <><input type="radio" id="solo" name="performance_type" value="solo" />Solo Performer</>
    <><input type="radio" id="dj" name="performance_type" value="dj" />DJ</><br/>
    <br/>
    <>Please link to your music, or a look at your performance:</><br/>
    <input id="spotify" type="text" placeholder="Spotify Artist ID" /><br/>
    <input id="youtube" type="text" placeholder="YouTube Channel or Video" /><br/>
    <input id="facebook" type="text" placeholder="Facebook Page" /><br/>
    <input id="bandcamp" type="text" placeholder="Bandcamp" /><br/>
    <input id="website" type="text" placeholder="Website" /><br/>
    <br />

    <>Do you need us to book local support?</><br/>
    <><input type="radio" id="support_need" name="support_need" value="yes" />Yes</>
    <><input type="radio" id="support_need" name="support_need" value="no" />No</><br/>
    <br/>
    
    <>Provide any specific technical needs or details here:</><br/>
    <input id="event-detail" type="text" /><br/>
    </>
  },
  {
    type: 'Agent',
    content:
    <>
    <input id="contact_act" type="text" placeholder="Headlining Band, Artist, or Performer Title/Name" /><br/>
    <><input type="radio" id="band" name="performance_type" value="band" />Band</><br/>
    <><input type="radio" id="solo" name="performance_type" value="solo" />Solo Performer</><br/>
    <><input type="radio" id="dj" name="performance_type" value="dj" />DJ</><br/>
    <br/>

    <input id="spotify" type="text" placeholder="Spotify Artist ID" /><br/>
    <input id="youtube" type="text" placeholder="YouTube Video or Channel" /><br/>
    <input id="facebook" type="text" placeholder="Facebook Page" /><br/>
    <input id="bandcamp" type="text" placeholder="Bandcamp" /><br/>
    <input id="website" type="text" placeholder="Website" /><br/>
    <br/>

    <>Do you need us to book local support?</><br/>
    <><input type="radio" id="support_need" name="support_need" value="yes" />Yes</><br/>
    <><input type="radio" id="support_need" name="support_need" value="no" />No</><br/>
    <br/>

    <>PACKAGE SUPPORT:</><br/>
    <br/>
    <input id="dsupport_title" type="text" placeholder="Direct Support" /><br/>
    <><input type="radio" id="band-2" name="support_type-2" value="band" />Band</><br/>
    <><input type="radio" id="solo-2" name="support_type-2" value="solo" />Solo Performer</><br/>
    <><input type="radio" id="dj-2" name="support_type-2" value="dj" />DJ</><br/>
    <div className="support-form">
      <input id="spotify-2" type="text" placeholder="Spotify Artist ID" /><br/>
      <input id="youtube-2" type="text" placeholder="YouTube Video or Channel" /><br/>
      <input id="facebook-2" type="text" placeholder="Facebook Page" /><br/>
      <input id="bandcamp-2" type="text" placeholder="Bandcamp" /><br/>
      <input id="website-2" type="text" placeholder="Website" /><br />
    </div><br/>
    <br/>

    <input id="opener_title" type="text" placeholder="Opener" /><br/>
    <><input type="radio" id="band-3" name="support_type-3" value="band" />Band</><br/>
    <><input type="radio" id="solo-3" name="support_type-3" value="solo" />Solo Performer</><br/>
    <><input type="radio" id="dj-3" name="support_type-3" value="dj" />DJ</><br/>
    <div className="support-form">
      <input id="spotify-3" type="text" placeholder="Spotify Artist ID" /><br/>
      <input id="youtube-3" type="text" placeholder="Youtube Video or Channel" /><br/>
      <input id="facebook-3" type="text" placeholder="Facebook Page" /><br/>
      <input id="bandcamp-3" type="text" placeholder="Bandcamp" /><br/>
      <input id="website-3" type="text" placeholder="Website" /><br/>
    </div><br/>
    <br/>

    <input id="opener2_title" type="text" placeholder="Second Opener Title" /><br/>
    <><input type="radio" id="band-4" name="support_type-4" value="band" />Band</><br/>
    <><input type="radio" id="solo-4" name="support_type-4" value="solo" />Solo Performer</><br/>
    <><input type="radio" id="dj-4" name="support_type-4" value="dj" />DJ</><br/>
    <div className="support-form">
      <input id="spotify-4" type="text" placeholder="Spotify Artist ID" /><br/>
      <input id="youtube-4" type="text" placeholder="YouTube Video or Channel" /><br/>
      <input id="facebook-4" type="text" placeholder="Facebook Page" /><br/>
      <input id="bandcamp-4" type="text" placeholder="Bandcamp" /><br/>
      <input id="website-4" type="text" placeholder="Website" /><br/>
    </div><br/>
    <br/>

    <>Provide any specific technical needs or details here:</><br/>
    <input id="event-detail" type="text" /><br/>

    <>Agency: </><input id="contact_org" type="text" placeholder="Name" /><br/>
    <>Phone: </><input id="contact_phone" type="tel" placeholder="###" /><br/>
    <>Mailing Address:</><br/>
    <input id="org_street1" type="text" placeholder="Street 1" /><br/>
    <input id="org_street2" type="text" placeholder="Street 2" /><br/>
    <input id="org_city" type="text" placeholder="City" /><br/>
    <input id="org_country" type="text" placeholder="Country" /><br/>
    <input id="org_zip" type="text" placeholder="Postal Code" /><br/>
    </>
  },
  {
    type: 'Promoter',
    content:
    <>
    <input id="contact_act" type="text" placeholder="Headlining Band, Artist, or Performer Title/Name" /><br/>
    <><input type="radio" id="band" name="performance_type" value="band" />Band</><br/>
    <><input type="radio" id="solo" name="performance_type" value="solo" />Solo Performer</><br/>
    <><input type="radio" id="dj" name="performance_type" value="dj" />DJ</><br/>
    <br/>

    <input id="spotify" type="text" placeholder="Spotify Artist ID" /><br/>
    <input id="youtube" type="text" placeholder="YouTube Video or Channel" /><br/>
    <input id="facebook" type="text" placeholder="Facebook Page" /><br/>
    <input id="bandcamp" type="text" placeholder="Bandcamp" /><br/>
    <input id="website" type="text" placeholder="Website" /><br/>
    <br/>

    <>Do you need us to book local support?</><br/>
    <><input type="radio" id="support_need" name="support_need" value="yes" />Yes</><br/>
    <><input type="radio" id="support_need" name="support_need" value="no" />No</><br/>
    <br/>

    <>PACKAGE SUPPORT:</><br/>
    <br/>
    <input id="dsupport_title" type="text" placeholder="Direct Support" /><br/>
    <><input type="radio" id="band-2" name="support_type-2" value="band" />Band</><br/>
    <><input type="radio" id="solo-2" name="support_type-2" value="solo" />Solo Performer</><br/>
    <><input type="radio" id="dj-2" name="support_type-2" value="dj" />DJ</><br/>
    <div className="support-form">
      <input id="spotify-2" type="text" placeholder="Spotify Artist ID" /><br/>
      <input id="youtube-2" type="text" placeholder="YouTube Video or Channel" /><br/>
      <input id="facebook-2" type="text" placeholder="Facebook Page" /><br/>
      <input id="bandcamp-2" type="text" placeholder="Bandcamp" /><br/>
      <input id="website-2" type="text" placeholder="Website" /><br />
    </div><br/>
    <br/>

    <input id="opener_title" type="text" placeholder="Opener" /><br/>
    <><input type="radio" id="band-3" name="support_type-3" value="band" />Band</><br/>
    <><input type="radio" id="solo-3" name="support_type-3" value="solo" />Solo Performer</><br/>
    <><input type="radio" id="dj-3" name="support_type-3" value="dj" />DJ</><br/>
    <div className="support-form">
      <input id="spotify-3" type="text" placeholder="Spotify Artist ID" /><br/>
      <input id="youtube-3" type="text" placeholder="Youtube Video or Channel" /><br/>
      <input id="facebook-3" type="text" placeholder="Facebook Page" /><br/>
      <input id="bandcamp-3" type="text" placeholder="Bandcamp" /><br/>
      <input id="website-3" type="text" placeholder="Website" /><br/>
    </div><br/>
    <br/>

    <input id="opener2_title" type="text" placeholder="Second Opener Title" /><br/>
    <><input type="radio" id="band-4" name="support_type-4" value="band" />Band</><br/>
    <><input type="radio" id="solo-4" name="support_type-4" value="solo" />Solo Performer</><br/>
    <><input type="radio" id="dj-4" name="support_type-4" value="dj" />DJ</><br/>
    <div className="support-form">
      <input id="spotify-4" type="text" placeholder="Spotify Artist ID" /><br/>
      <input id="youtube-4" type="text" placeholder="YouTube Video or Channel" /><br/>
      <input id="facebook-4" type="text" placeholder="Facebook Page" /><br/>
      <input id="bandcamp-4" type="text" placeholder="Bandcamp" /><br/>
      <input id="website-4" type="text" placeholder="Website" /><br/>
    </div><br/>
    <br/>

    <>Provide any specific technical needs or details here:</><br/>
    <input id="event-detail" type="text" /><br/>

    <>Agency: </><input id="contact_org" type="text" placeholder="Name" /><br/>
    <>Phone: </><input id="contact_phone" type="tel" placeholder="###" /><br/>
    <>Mailing Address:</><br/>
    <input id="org_street1" type="text" placeholder="Street 1" /><br/>
    <input id="org_street2" type="text" placeholder="Street 2" /><br/>
    <input id="org_city" type="text" placeholder="City" /><br/>
    <input id="org_country" type="text" placeholder="Country" /><br/>
    <input id="org_zip" type="text" placeholder="Postal Code" /><br/>
    </>
  },
  {
    type: 'Private',
    content: 
    <>
    <>RESERVING FOR:</><br/>
    <input id="contact_act" type="text" placeholder="Short Event Description" /><br/>
    
    
    <>Your Organization: </><input id="contact_org" type="text" placeholder="Name, if applicable)" /><br/>
    <>Phone: </><input id="contact_phone" type="tel" placeholder="###" /><br/>
    <>Mailing Address:</><br/>
    <input id="org_street1" type="text" placeholder="Street 1" /><br/>
    <input id="org_street2" type="text" placeholder="Street 2" /><br/>
    <input id="org_city" type="text" placeholder="City" /><br/>
    <input id="org_country" type="text" placeholder="Country" /><br/>
    <input id="org_zip" type="text" placeholder="Postal Code" /><br/>
    <br/>
    <>Provide any specific event needs, ideas, or details here:</><br/>
    <input id="event-detail" type="text" /><br/>
    </>
  }
]

const monthDateCounts = {
  'January': 31, 
  'February': 28, 
  'March': 31, 
  'April': 30, 
  'May': 31, 
  'June': 30, 
  'July': 31, 
  'August': 31, 
  'September': 30, 
  'October': 31, 
  'November': 30, 
  'December': 31
};

const years = [2020, 2021]

const holdTypes = [
  {
    type: 'A SINGLE DATE',
    content: <SingleHold 
                monthDateCounts={monthDateCounts} 
                years={years} 
                onChange={() => this.handleChange()} />
  },
  {
    type: 'A RANGE OF DATES',
    content: <RangeHold dayCounts={monthDateCounts} years={years} />
  },
  {
    type: 'MULTIPLE DATES',
    content: <MultiHold dayCounts={monthDateCounts} years={years} />
  }
]

class App extends Component {

  constructor() {
    super()
    this.state = {
      display: null,
      holdType: null,
      monthSelected: null,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  displayContent = (section) => {
    this.setState({
      display: section.content
    })
  }

  displayHoldType = (holdType) => {
    this.setState({
      holdType: holdType.content
    })
  }

  handleChange = () => {
    console.log('handleChange listening')
    // this.setState({
    //    selectedMonth: value 
    // })
  }

  render () {
    return (
      <>
      <main className='App'>
        <div className="contact-block">
            <>YOUR FIRST NAME</>: <input id="hold_firstname" type="text" /><br/>
            <>YOUR LAST NAME:</>: <input id="hold_lastname" type="text" /><br/>
            <>YOUR E-MAIL:</> <input id="hold_email" type="text" /><br/>
            <>I AM AN:</><br/>
            {sections.map((section, idx) => {
                return(
                  <button key={idx} onClick={() => this.displayContent(section)}>{section.type}</button>
                )
              })
            }
        </div>

        <div>
          I WANT TO HOLD:<br/>
          {holdTypes.map((holdType, idx) => {
                return(
                  <button key={idx} onClick={() => this.displayHoldType(holdType)}>{holdType.type}</button>
                )
            })
          }
          {this.state.holdType}<br/>
          {this.state.display}
        </div>

        <div>
          
        </div>

      </main>
      </>
    );
  }
}

export default App;