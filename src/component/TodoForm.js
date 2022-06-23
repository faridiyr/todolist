import React, { useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = event => {
        setInput(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('');
    };

    return (
        <form className='todo-form'>
            <input
                type='text'
                placeholder='Create To Do'
                value={input}
                name='text'
                className='todo-input'
                onChange={handleChange}
            />
            <button className='todo-button'>Create</button>
        </form>
    )
}

export default TodoForm