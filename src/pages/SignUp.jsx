import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './signup.css';


function SignUp() {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/signup", { username, email, password })
            .then(result => {
                console.log(result);
                navigate("/login");
            })
            .catch(err => console.log(err));
    }

    return (
    <div className="container">
        <h1>Bojo</h1>
            <form onSubmit={handleSubmit}>
                <label>
                Username
                    <input type="text" placeholder="Username" value={username} onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                Email
                    <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                Password
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                    <input type="submit" value="Sign Up" />
            </form>

    </div>
    );
}
export default SignUp
