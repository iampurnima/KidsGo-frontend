import React, { useState } from "react";
import { Link } from "react-router-dom";
import './css/Login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic
    };

    return (
        <div className="loginContainer">
            <div className="loginCard">
                <h2>Login</h2>
                <form onSubmit={handleLogin} className="loginForm">
                    <div className="formGroup">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="formGroup rememberMe">
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe">Remember Me</label>
                    </div>
                    <button type="submit" className="loginButton">Login</button>
                </form>
                <div className="loginOptions">
                    <Link to="/forgot-password" className="forgotPassword">Forgot Password?</Link>
                    <Link to="/signup" className="signupLink">Sign Up</Link>
                </div>
                <div className="socialLogin">
                    <p>Or login with:</p>
                    <button className="socialButton google">Google</button>
                    <button className="socialButton facebook">Facebook</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
