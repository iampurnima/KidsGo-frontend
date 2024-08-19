import React, { useState } from "react";
import './css/Contact.css';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for contacting us! We will get back to you soon.");
        // Handle form submission logic here
    };

    return (
        <div className="contactContainer">
            <h2>Contact Us</h2>
            <p>If you have any questions, feel free to reach out to us. We're here to help!</p>
            <form onSubmit={handleSubmit} className="contactForm">
                <div className="formGroup">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
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
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="contactButton">Send Message</button>
            </form>
            <div className="contactInfo">
                <h3>Our Contact Information</h3>
                <p>Email: purnimasharma0924@gmail.com</p>
                <p>Phone: +977 9864421904</p>
                <p>Address: Kathmandu, Nepal</p>
            </div>
        </div>
    );
}

export default Contact;
