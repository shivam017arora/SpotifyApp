import React from 'react'
import './Login.css'
import { loginURL } from './spotify';

function Login() {
    return (
        <div className='login'>
            <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png' alt='logo' />
            <a href={loginURL}> Login with Spotify </a>
        </div>
    )
}

export default Login;