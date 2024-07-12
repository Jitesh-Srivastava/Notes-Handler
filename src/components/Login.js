import React, { useState } from 'react'
import '../CSS/Login.css'

export default function Login() {

    // const [fname, setfname] = useState('')
    // const [lname, setlname] = useState('')
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: ""
    })


    const handleChange = (event) => {
        const { name, value } = event.target

        setFullName((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    return (
        <div>
            <form className='body'>
                <h1>Hello {fullName.fname} {fullName.lname}</h1>
                <p>{fullName.email}</p>
                <input type="text" name="fname" value={fullName.fname} onChange={handleChange} placeholder='First Name' />
                <input type="text" name="lname" value={fullName.lname} onChange={handleChange} placeholder='Last Name' />
                <input type="email" name="email" value={fullName.email} onChange={handleChange} placeholder='Email' />
                <button>Submit</button>
            </form>
        </div >
    )
}
