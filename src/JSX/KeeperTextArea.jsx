import React, { useState } from 'react'

export default function KeeperTextArea(props) {

    const [text, setText] = useState({
        title: "",
        note: ""
    })

    function handleChange(e) {
        const { name, value } = e.target
        setText(prev => {
            return { ...prev, [name]: value }
        })
    }

    return (
        <form className='keeperTextArea'>

            <input
                type="text"
                onChange={handleChange}
                name="title"
                value={text.title}
                placeholder='Enter title' />

            <input
                className='mt-2'
                type="text"
                onChange={handleChange}
                name="note"
                value={text.note}
                placeholder='Enter Note' />

            <button className='btn btn-primary mt-2' onClick={(e) => { props.sendText(text); setText({ title: "", note: "" }); e.preventDefault() }}>Submit</button>
        </form>
    )
}
