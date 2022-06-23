import React, { useState } from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const


    return (
        <div>
            <h1>Whats the plan for Today?</h1>
            <TodoForm />
        </div>
    )
}

export default TodoList