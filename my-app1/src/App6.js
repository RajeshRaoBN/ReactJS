import React from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./components/todosData"

function App6() {
    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item} />)
    return(
        <div className="todo-list">
            {todoItems}
        </div>
    )
}

export default App6