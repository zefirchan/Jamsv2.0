import React, {useState} from "react";
import { Link } from "react-router-dom";
import menuLogo from './img/JAMS_1563X1563.png'


{/* */}
export const Forgotpass = (props) =>{
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [answer, setAnswer] = useState('');

    {/* event handler for form entry*/}
    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(email);
    }
    {/*forgot password form */}
    return(

        <><div className="big-logo">
            <img src={menuLogo} alt="logo" />

        </div><div className="auth-form-container">
                <h2>Recover Password</h2>
                <form className="forgotpass-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@mail.com" id="email" name="email" />
                    <label htmlFor="securityquestion">Security Question</label>
                    <input value={answer} onChange={(e) => setAnswer(e.target.value)} type="email" placeholder="what city were you born in?" id="answer" name="answer" />
                    <button type="submit">Recover Password</button>
                </form>
                {/* switch to login form*/}
                <Link to="/">
                    <button className="link-btn">login</button>
                </Link>
            </div></>
    );
}
