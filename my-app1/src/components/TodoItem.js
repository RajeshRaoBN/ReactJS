import React from "react"

function TodoItem(props) {
    return(
        <div className="todo_items">
            <input 
                type= "checkbox" 
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p className="navbar">{props.item.text}</p>
        </div>
    )
    
}

export default TodoItem