import React from 'react';
import { Button } from "@material-ui/core";
import './Login.css';
import { auth ,provider } from './firebase'
function Login() {
    const signIn = (e) => {
        auth.signInWithPopup(provider).catch( (error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__log">
                <img src="https://upload.wikimedia.org/wikipedia/en/9/98/Discord_logo.svg" alt="ss"/>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
