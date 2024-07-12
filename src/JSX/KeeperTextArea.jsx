import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Fab } from '@mui/material';
import { Zoom } from '@mui/material';

export default function KeeperTextArea(props) {

    const [isExpanded, setExpanded] = useState(false)
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

    function handleSubmit(e) {
        props.sendText(text);
        setText({ title: "", note: "" });
        e.preventDefault()
    }

    function handleExpand() {
        setExpanded(true)
    }

    return (
        <form className='keeperTextArea'>

            {isExpanded && <input
                type="text"
                onChange={handleChange}
                name="title"
                value={text.title}
                placeholder='Title' />}

            <textarea
                type="text"
                onChange={handleChange}
                onClick={handleExpand}
                name="note"
                value={text.note}
                placeholder="What's on your mind...."
                rows={isExpanded ? "1" : "1"} />

            <Zoom in={isExpanded}>
                <Fab onClick={handleSubmit}><AddCircleIcon /></Fab>
            </Zoom>
        </form>
    )
}
