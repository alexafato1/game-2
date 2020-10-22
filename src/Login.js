import React from 'react'
import './Login.css'

function Login() {

    return (
        <div className='login'>
        <div className='login__form'>
            <h1 className='login__title'>Log In or Sign Up</h1>
            <input type='text' placeholder='name'></input>
            <input type='email' placeholder='email'></input>
            <input type='password' placeholder='password'></input>
            <button className='login__submit'>LOGIN</button>
            <button className='login__submit signup'>SIGN UP</button>
        </div>
        </div>
    )
}

export default Login
