import React, { Component } from 'react'

// function updateDaySelector(selectedMonth) {
    
//     dayOptions = []
    // for (i = 1; i <= props.dayCounts[selectedMonth]; i++) {
    //     dayOptions.push(`<option>${i}</option>`)
    // }

//     $('#day-selector').html(
//         `<select id="day-selector">
//             ${dayOptions.join().replace(/,/g, '')}
//         </select>`
//     )

// }

class SingleHold extends Component {

    render() {
        const monthOptions = Object.keys(this.props.monthDateCounts)
        return(
            <>
            <select id="month-selector" onChange={this.props.onChange}>
                {monthOptions.map((month, idx) => {
                        return(
                            <option key={idx} value={month}>{month}</option>
                        )
                    })
                }
            </select>
            <select id="day-selector">

            </select>
            </>
        )
    }
    
}

export default SingleHold