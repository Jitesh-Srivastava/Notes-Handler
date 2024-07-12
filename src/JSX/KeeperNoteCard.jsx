import React from 'react'
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';

export default function KeeperNoteCard(props) {
    return (
        <div className='noteCard'>
            <h3>{props.title}</h3>
            <p>{props.note}</p>
            <button onClick={() => props.deleteEntry(props.id)}><DeleteSharpIcon /></button>
        </div>
    )
}
