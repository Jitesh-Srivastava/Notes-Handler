import React, { useState } from 'react'


export default function Textarea() {
    
    const [text, setText] = useState('');

    // ------------------------------------------Button handler------------------------------------------
    const eraseText = () => {
        let newtext = "";
        setText(newtext); 
    }

    const upperCase = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const copyText = () => {
        var copiedtext = document.getElementById("floatingTextarea2").value;

        // Copy the text inside the text field.
        navigator.clipboard.writeText(copiedtext.value);
    }

    const lowerCase = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const handleOnchange = (e) => {
        setText(e.target.value);
    }
    return (
        <>
            <div className='container'>
                <h1 className='my-4'>Enter the text here.</h1>
                <div className="form-floating container">
                    <textarea className="form-control" value={text} id="floatingTextarea2" style={{ height: "250px" }} onChange={handleOnchange}></textarea>
                </div>
                <button className='btn btn-outline-primary my-3 mx-2' onClick={upperCase}>Upper Case</button>
                <button className='btn btn-outline-primary my-3 mx-2' onClick={lowerCase}>Lower Case</button>
                <button className='btn btn-outline-primary my-3 mx-2' onClick={eraseText}>Erase Text</button>
                <button className='btn btn-outline-primary my-3 mx-2' onClick={copyText}>Copy Text</button>
            </div>

            <div className="container">
                <h1>Text Summary</h1>
                <p>Number of words {text.split(' ').length} and number of characters {text.length}</p>
            </div>

            <div className="container">
                <h1>Preview</h1>
                <p>{text}</p>
            </div>
        </>
    )
}
