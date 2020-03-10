import React from "react"
import ReactDOM from "react-dom"

class Hello extends React.Component {
    render () {
        return(
            <div>
                <h1>Hello {this.props.myName}</h1>
                <input type="checkbox"></input>
                <h2>here is a checkbox</h2>
            </div>
        )
    }
}

const HelloStateless = (props) => <h1>Hello {props.myName}</h1>

ReactDOM.render(<Hello myName="Rajesh"/>, document.getElementById("root"))