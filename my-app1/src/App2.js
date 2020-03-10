import React from "react"
import Comp from "./components/Comp"
import TodoItems from "./components/TodoItems"

function App2() {
    const firstName = "Raj"
    const lastName = "Rao"
    return(
        <div>
            <h1>Hello {firstName + " " + lastName}</h1>
            <h2>You are {`${firstName} ${lastName}`}</h2>
            <Comp />
            <TodoItems />
            <TodoItems />
            <TodoItems />
            <TodoItems />

            
        </div>
    )
}

export default App2