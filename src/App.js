import React, {useState} from "react";


import './App.css';
import './NavbarStyles.css'
import { Login } from './Login';
import {Forgotpass} from './Forgotpass';
import { Register } from './Register';

import {Navbar} from './Navbar';



function App() {
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [currentForm, setCurrentForm] = useState('login');
  const [passwordHistory, setPasswordHistory] = useState([]);

  function handleLogin(event) {
    event.preventDefault();
    const password = event.target.password.value;
    if (password === "correctPassword") {
      // Login successful
    } else {
      // Login failed
      setFailedAttempts(failedAttempts + 1);
      if (failedAttempts === 2) {
        alert("Your account has been suspended.");
        event.target.password.disabled = true;
      }
    }
  }
  function handleResetPassword(event) {
    event.preventDefault();
    const newPassword = event.target.newPassword.value;
    if (passwordHistory.includes(newPassword)) {
      alert("You cannot use an old password.");
    } else {
      setPasswordHistory([...passwordHistory, newPassword]);
      alert("Password changed successfully.");
    }
  }
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  
  return (
    <div className="App">
      <Navbar/>
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} handleLogin={handleLogin} />
      ) : (
        <Forgotpass onFormSwitch={toggleForm} />
      )}
      <Register/>
    </div>
  );
}

export default App;
