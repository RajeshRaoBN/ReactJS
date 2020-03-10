import React from "react"
import { renderIntoDocument } from "react-dom/test-utils"



class App7 extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "yes"
        }
    }
    yourMethodHere() {
        
    }
    render() {
        return(
            <div>
                <h1>Hello World</h1>
                <h1>Is state important to know? {this.state.answer}</h1>
                
            </div>
        )
    }
}


export default App7