import React from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./components/todosData"

class App10 extends React.Component {

    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render(){
        const todoItens = this.state.todos.map(item => <TodoItem Key={item.id} item={item}/>)
        return(
            <div className="todo-list">
                <h1>Hello World</h1>
                {todoItens}
            </div>
        )
    }

}

export default App10