import React, { useState } from "react";
import './css/Profile.css';

function Profile() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSave = () => {
        alert("Profile updated!");
    };

    return (
        <div className="profileContainer">
            <h2>Your Profile</h2>
            <div className="profileGroup">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />
            </div>
            <div className="profileGroup">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
            </div>
            <button className="saveButton" onClick={handleSave}>
                Save Changes
            </button>
        </div>
    );
}

export default Profile;
