import React from "react"

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
                this.setState(prevState => {
                    return{
                        count: prevState.count + 1
                    }
                })
    }

    render() {
        return(
            <div>
                <h1>Hello World</h1>
                <h2>{this.state.count}</h2>
                <img src="https://www.fillmurray.com/200/100"/>
                <br />
                <br />
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

export default App