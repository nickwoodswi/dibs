import React, {Component} from 'react'

class Landing extends Component {
    render() {
        return(
            <div className="app-intro">
            <p>Venue owners, performers, agents, promoters, and private parties all agree that organizing calendar holds by email is an irritating process.</p> 
            
            <p>In the time it takes to request a hold and get a response from a venue or talent buyer, routing needs and priorities change, lines get crossed, and follow-up gets buried. The same issues occur again when holds are challenged, and again when offers are made and confirmed.</p>

            <p>Venue owners, already stretched coordinating day-to-day service operations, can spend up to four hours daily answering email. The result is often missed expectations, missed opportunity, and weakened relationships.</p>

            <p><b>DIBS</b>, a simple, integrated application built with <b>ReactJS</b>, gives performers and their reps an easy form to <b>instantly place holds</b> at a preferred venue, and learn their place in line for holds requested on a <b>single date, a range of dates, or multiple ranges of dates</b>.</p>

            <p>For small- and mid-size venue owners, holds placed through the DIBS form are organized by date in an intuitive back office application, where each hold's status can be quickly changed and filtered accordingly by type and date.</p>
            
            <p>When that occurs, DIBS generates pre-built emails at the click of a button to make proactive communication with the agent a quicker process. And contacts assigned to each hold are stored in the database regardless of hold type, permanently, which makes DIBS a great tool for building a call list - by location - when empty dates need filling, or local support is required for a headliner without history in a market.</p>

            <p><b>Try DIBS below by placing a hold in the form</b>, see how it's displayed to venue staff in the back office, and imagine how much time you'd save using it.</p>

            <p><i>©2020 - Nick Woods / <a href="mailto:nick.woods.wi@gmail.com" id='contact'>nick.woods.wi@gmail.com</a></i></p>
          </div>
        )
    }
}

export default Landing