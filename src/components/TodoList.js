import React, { useState } from 'react'
import '../CSS/TodoList.css'
import Todo from '../JSX/Todo'

export default function TodoList() {

    const [text, setText] = useState("")
    const [todo, setTodo] = useState([])

    function handleChange(event) {
        const newvalue = event.target.value
        setText(newvalue)
    }

    function handleSubmit() {
        setTodo((prevValue) => { return [...prevValue, text] })
        setText("")
    }

    function deleteTodo(id) {
        setTodo(prevValues => {
            return prevValues.filter((_item, index) => { return index !== id })
        })
    }

    return (
        <div className='body'>
            <h1>TodoList</h1>
            <input type="text" onChange={handleChange} value={text} />
            <button onClick={handleSubmit}>Add</button>

            {todo.map((item, index) => {
                return <Todo
                    key={index}
                    id={index}
                    text={item}
                    onChecked={deleteTodo} />
            })}
        </div>
    )
}
