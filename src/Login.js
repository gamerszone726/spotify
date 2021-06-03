import React from 'react';
import './Login.css';
import SPOTIFY from './images/spotify.jpg';
import { loginUrl } from './spotify';

function Login(){
    return(
        <div className="Login">
            
            {/* spotify logo*/}
            <img src= {SPOTIFY} alt=""/>

            {/* login button*/}
            <a href={loginUrl}> Login with Spotify</a>
    

        </div>
    )
}

export default Login