import React from 'react'

export default function Todo(item) {

    return (
        <li onClick={() => item.onChecked(item.id)} >{item.text}</li>
    )
}
