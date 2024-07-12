import React, { useState } from 'react'
import '../CSS/KeeperApp.css'
import KeeperTextArea from '../JSX/KeeperTextArea'
import KeeperNoteCard from '../JSX/KeeperNoteCard';

export default function KeeperAppHeader() {

    const [noteArray, setNoteArray] = useState([]);

    // Add Entry to the list
    function getText(text) {
        setNoteArray(prev => { return [...prev, text] })
    }

    // Delete Entry from List
    function editEnrty(id) {
        setNoteArray(prev => { return prev.filter((_item, index) => { return index !== id }) })
    }

    return (
        <div>
            <header>
                <h1>Keeper App</h1>
            </header>

            <body>

                {/* Get Text */}
                <KeeperTextArea
                    sendText={getText} />

                {/* Display text */}
                <div className="note">
                    {noteArray.map(({ title, note }, index) => {
                        return <KeeperNoteCard
                            key={index}
                            id={index}
                            title={title}
                            note={note}
                            deleteEntry={editEnrty}
                        />
                    })}
                </div>
            </body>
        </div>
    )
}
