import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        let wordDisplay
        if(this.state.isLoggedIn) {
            wordDisplay = "in"
        } else {
            wordDisplay = "out"
        }
        return(
            <div>
                <h1>Hello World</h1>
                <h2>You are currently logged{wordDisplay}</h2>
            </div>
        )
    }
}

export default App