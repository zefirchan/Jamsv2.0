import React, {useState} from "react";

{/* */}
export const Forgotpass = (props) =>{
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [oldPasswords, setOldPasswords] = useState([]);

    {/* event handler for form entry*/}
    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(email);

        // check if password has been used before
        const newPassword = e.target.password.value;
        if (oldPasswords.includes(newPassword)) {
            alert("Please choose a new password. This password has been used before.");
            return;
        }

        // add new password to list of old passwords
        setOldPasswords([...oldPasswords, newPassword]);
    }

    {/*forgot password form */}
    return(
        <div className="auth-form-container">
            <h2>Recover Password</h2>
            <form className="forgotpass-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@mail.com" id="email" name="email"/>
                <label htmlFor="password">New Password</label>
                <input type="password" placeholder="New Password" id="password" name="password" />
                <button type="submit">Recover Password</button>
            </form>
            {/* switch to login form*/}
            <button className="link-btn" onClick={() =>props.onFormSwitch('login')}>login</button>
        </div>
    );
}
