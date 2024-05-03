import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './login.css';

function Login() {
    const [email, setEmail] = useState(""); // State variable to store email input
    const [password, setPassword] = useState(""); // State variable to store password input
    const [loginSuccess, setLoginSuccess] = useState(false); // State variable to store login success status
    const [errorMessage, setErrorMessage] = useState(""); // State variable to store error message
    const navigate = useNavigate(); // Hook for programmatic navigation

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form submission from refreshing the page
        try {
            const response = await axios.post("http://localhost:3001/login", { email, password }); // Send login request to server
            console.log(response); // Log the response from the server
            localStorage.setItem('loggedIn', true); // Store login status in local storage
            localStorage.setItem('userId', response.data.userId); // Store user ID in local storage
            localStorage.setItem('username', response.data.username); // Store username in local storage
            setLoginSuccess(true); // Set login success status to true
            setTimeout(() => {
                navigate("/dashboard"); // Redirect to dashboard after successful login
            }, 2000); // Delay redirect for 2 seconds
        } catch (error) {
            if (error.response) {
                console.log(error.response.data); // Log the error response from the server
                setErrorMessage(error.response.data.message); // Set error message state variable
                setTimeout(() => {
                    setErrorMessage(""); // Clear the error message after 5 seconds
                }, 5000); // 5 seconds delay
            } else {
                console.log(error.message); // Log the error message
                setErrorMessage('An error occurred while processing your request.'); // Set generic error message state variable
                setTimeout(() => {
                    setErrorMessage(""); // Clear the error message after 5 seconds
                }, 5000); // 5 seconds delay
            }
        }
    }

    return (
        <div className="container">
            <h1>Bojo</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} /> {/* Input field for email */}
                </label>
                <label>
                    Password
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /> {/* Input field for password */}
                </label>
                <input type="submit" value="Login" style={{ marginTop: '1em' }} /> {/* Submit button */}
                <button onClick={() => navigate("/signup")} style={{ marginTop: '1em' }}>Sign Up</button> {/* Sign up button */}
            </form>
            {loginSuccess && <div className="alert alert-success mt-3" role="alert">
                Login Successful!
            </div>}
            {errorMessage && <div className="alert alert-danger mt-3" role="alert">
                {errorMessage}
            </div>}
        </div>
    );
}

export default Login;
