import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }
    // yaha pe data bhejne tak ka kaam hogya ab data lene ka kaam baaki hai
    return (
        <>            <h2 className='m-3 text-center'>Login form</h2>
            <div className='flex justify-center items-center'>
                <div>

                    <input className='p-2 m-3 outline-none' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
                    <br />
                    <input type="password" className='p-2 m-3 outline-none' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                </div>
                <button className='m-3 bg-gray-600 p-2 rounded-lg ' onClick={handleSubmit}>Submit</button>
            </div>
        </>

    )
}

export default Login
