import React from "react";
import { useState } from "react";
import './Profile.css';
function Profile() {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")

    const handleSave = () => {
        alert("profile updated!");
    };

    return (
        <div className="profileContainer">
            <h2>Profile</h2>
            <div className="profileGroup">
                <label htmlFor="name">Name:</label>
                <input
                type="text"
                id="name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                />
            </div>
            <div className="profileContainer">
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <button className="saveButton" onClick={handleSave}>Save Changes</button>

        </div>
    );
    
}
export default Profile;