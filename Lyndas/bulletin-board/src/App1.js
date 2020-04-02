import React from "react"

let parsonalData = {
        name: "Rajesh", email: "rajesh@someco.com"
    }
class App1 extends React.Component {

    state = {
        loggedIn: false
    }

    numbers = [1, 2, 3, 4]

    

    One = () => {
        const {name, email} = this.props
        return(
            <div>
                <h1>Welcome Mr. {name}</h1>
                <h1>your email is {email} ok</h1>
            </div>
        )
    }

    lakeList = [
        {id: 1, name: "Echo Lake", trailhead: "Echo Lake"},
        {id: 2, name: "Maud Lake", trailhead: "Wright's Lake"},
        {id: 3, name: "Cascade Lake", trailhead: "Bayview"}
    ]
    logIn = () => this.setState({loggedIn: true})
    logOut = () => this.setState({loggedIn: false})
    render() {
        return(
        <div>
            <button onClick={this.logIn}>Log In</button>
            <button onClick={this.logOut}>Log Out</button>
            <h1>Hello Rajesh you have { this.state.loggedIn 
            ? "logged in" : "logged out"} </h1>
            <this.One name={parsonalData.name} email={parsonalData.email} />
            <ul>{this.lakeList.map(lake => <li key={lake.id}>{lake.name} Trailhead: {lake.trailhead}</li>)}</ul>
        </div>
    )
    }
}


export default App1