import React from "react"

function Comp() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else if (hours >= 17 && hours < 21) {
        timeOfDay = "evening"
    } else {
        timeOfDay = "night"
    }

    const styles = {
        color: "#FF8C00",
        backgroundColor: "#ff2d00",
        fontSize: "50px"
    }
    return(
        <div>
            <h1 style={styles}>Good {timeOfDay}!</h1>
        </div>
    )
}

export default Comp