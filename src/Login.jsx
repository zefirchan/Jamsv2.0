import { signInWithEmailAndPassword } from "firebase/auth";
import React, {useState} from "react";
import { auth } from "./firebase";



export const Login = (props) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    {/* event handler for form entry*/}
    
    const logIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error);
        })

    }
    //login form
    return(
        <div className="auth-form-container">
            <form className="login-form" onSubmit={logIn}>
                <h2>Login</h2>
                <label htmlFor="email">Username</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="username (your email)" id="email" name="email"/>
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) =>setPassword(e.target.value) } type="password" placeholder="******" id="password" name="password"/>
                <button type="submit">Log In</button>
            </form>
            {/* switch to password form*/}
            <button className="link-btn" onClick={() =>props.onFormSwitch('forgotpass')}>Forgot password</button>

            
            
        </div>
    );
}

