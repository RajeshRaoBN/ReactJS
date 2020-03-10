import React, {Component} from "react"

class App8 extends Component {
    constructor() {
        super()
        this.state = {
            name: "Silly",
            age: 18
        }
    }
    render() {
        return(
            <div>
                <h1>Hello World</h1>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )
    }
}

export default App8