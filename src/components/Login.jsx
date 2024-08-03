import React from "react";
import { useState } from "react";
import './Login.css';
function Login() {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    // const history = useHistory();
    const handleLogin = (e) =>{
        e.preventDefault();
       
    };
    return(
        <div className="loginContainer">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="formGroup">
                    <label htmlFor="email:">Email</label>
                    <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    />

                </div>
                <div className="formGroup">
                    <label htmlFor="password">Password:</label>
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                    />
                </div>
                <button type="submit" className="loginButton">Login</button>                
            </form>

        </div>
    );
    
}
export default Login;